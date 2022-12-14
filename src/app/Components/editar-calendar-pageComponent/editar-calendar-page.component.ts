//Modulos del componente y ciclos de vida
import { Component, OnInit, AfterViewInit } from '@angular/core';
//Formulario Reactivo
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//Servicios
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/Services/Data.service';
//Modelos de datos
import { CalendarModel } from 'src/app/Models/Calendar.models';
import { CalendarService } from 'src/app/Services/Calendar.services';

@Component({
  selector: 'app-editar-calendar-page',
  templateUrl: './editar-calendar-page.component.html',
  styleUrls: ['./editar-calendar-page.component.css'],
})
export class EditarCalendarPageComponent implements OnInit, AfterViewInit {
  //Formunario Reactivo
  ActualizarForm: FormGroup;
  //Identificador unico en la bd traido por la url
  id: string;
  //Posicion en el arreglo traido por url
  pos:string
  //Objeto obtenido de la bd para editar
  ObjCalendar: CalendarModel[];
  
  currentDate?:any
  constructor(
    private _formBuilder: FormBuilder,
    private _Route: ActivatedRoute,
    private _DataService: DataService,
    private _Router: Router,
    private _CalendarService: CalendarService
  ) 
  {
    //inicializacion de atributos
    this.ObjCalendar = [];
    this.id = '';
    this.pos= ''

    this.ActualizarForm = this._formBuilder.group({
      // Datos encabezado
      nombre: ['', Validators.required],
      dia: [''],
      hora: ['', Validators.required],
    //  lunes: [''],
    //  martes: [''],
    //  miercoles: [''],
     // jueves: [''],
    //  viernes: [''],
     // sabado: [''],
    //  domingo: [''],
      estado: ['S', Validators.required],
    });
  }
  
  //Ciclo de vida inicial
  ngOnInit(): void {
    //Tomamos el parametro enviado por la URL desde el componente listar
    this.id = '' + this._Route.snapshot.paramMap.get('id');
    this.pos = '' + this._Route.snapshot.paramMap.get('pos');

    this.consultarHorario();
  }
  
  
  //metodo para Obtener un unico registro del backend
  public consultarHorario() {
    this._DataService.ConsularReg(this.id).subscribe((e) => {
      this.ObjCalendar = e;
    });
  }
  
  
  //Formatear el formulario
  public AsignarFormulario() {
    this.ActualizarForm.controls['nombre'].setValue(this.ObjCalendar[0].nombre);
    this.ActualizarForm.controls['dia'].setValue(this.ObjCalendar[0].dia);
    this.ActualizarForm.controls['hora'].setValue(this.ObjCalendar[0].hora);
   
  }
  //Segundo ciclo de vida
  ngAfterViewInit(): void {
    //Ejecutamos el metodo anterior luego de cierto tiempo recorrido
    setTimeout(() => {
      this.AsignarFormulario();
    }, 1000);
  }
  
  //Metodo para cancelar una actualizacion
  public cancelar() {
    this._Router.navigate(['TimbreAutomatico?/Home/Listado/Activos']);
  }
  
  //Metodo para actualizar un registro
  public ejecutar() {
    let Obj:CalendarModel = this.ActualizarForm.value
    Obj.id = +this.id;
    Obj.lunes= 'S'
    Obj.martes= 'S'
    Obj.miercoles= 'S'
    Obj.jueves= 'S'
    Obj.viernes= 'S'
    Obj.sabado= 'S'
    Obj.domingo= 'S'
    Obj.estado = this.ObjCalendar[0].estado

    console.log(Obj);
    

    this._CalendarService.Update(Obj,this.id, this.pos)
    this._Router.navigate(['TimbreAutomatico?/Home/Listado/Activos']);

  }
}
