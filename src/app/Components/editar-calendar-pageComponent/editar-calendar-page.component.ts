//Modulos del componente y ciclos de vida
import { Component, OnInit, AfterViewInit } from '@angular/core';
//Formulario Reactivo
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//Servicios
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/Services/Data.service';
//Modelos de datos
import { CalendarModel } from 'src/app/Models/Calendar.models';

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
  //Objeto obtenido de la bd para editar
  ObjCalendar: CalendarModel[];

  constructor(
    private _formBuilder: FormBuilder,
    private _Route: ActivatedRoute,
    private _DataService: DataService,
    private _Router: Router
  ) 
  {
    //inicializacion de atributos
    this.ObjCalendar = [];
    this.id = '';

    this.ActualizarForm = this._formBuilder.group({
      // Datos encabezado
      nombre: ['', Validators.required],
      dia: [''],
      hora: ['', Validators.required],
      lunes: [''],
      martes: [''],
      miercoles: [''],
      jueves: [''],
      viernes: [''],
      sabado: [''],
      domingo: [''],
      estado: ['S', Validators.required],
    });
  }
  
  //Ciclo de vida inicial
  ngOnInit(): void {
    //Tomamos el parametro enviado por la URL desde el componente listar
    this.id = '' + this._Route.snapshot.paramMap.get('id');
    this.consultarHorario();
  }
  
  
  //metodo para Obtener un unico registro del backend
  public consultarHorario() {
    this._DataService.ConsularReg(this.id).subscribe((e) => {
      this.ObjCalendar = e;
    });
  }
  
  //Segundo ciclo de vida
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.AsignarFormulario();
    }, 2000);
  }
  
  AsignarFormulario() {
    console.log(this.ObjCalendar);
    console.log(this.ObjCalendar[0].nombre);

    this.ActualizarForm.controls['nombre'].setValue(this.ObjCalendar[0].nombre);
    this.ActualizarForm.controls['lunes'].setValue(this.ObjCalendar[0].lunes);
    this.ActualizarForm.controls['martes'].setValue(this.ObjCalendar[0].martes);
    this.ActualizarForm.controls['miercoles'].setValue(
    this.ObjCalendar[0].miercoles
    );
    this.ActualizarForm.controls['jueves'].setValue(this.ObjCalendar[0].jueves);
    this.ActualizarForm.controls['viernes'].setValue(
      this.ObjCalendar[0].viernes
    );
    this.ActualizarForm.controls['sabado'].setValue(this.ObjCalendar[0].sabado);
    this.ActualizarForm.controls['domingo'].setValue(
      this.ObjCalendar[0].domingo
    );
  }
  
  //Metodo para cancelar una actualizacion
  public cancelar() {
    this._Router.navigate(['TimbreAutomatico?/Home/Listado/Activos']);
  }
  
  //Metodo para actualizar un registro
  public ejecutar() {}
}
