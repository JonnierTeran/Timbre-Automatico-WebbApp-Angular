import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { CalendarModel } from 'src/app/Models/Calendar.models';
import { DataService } from 'src/app/Services/Data.service';

@Component({
  selector: 'app-editar-calendar-page',
  templateUrl: './editar-calendar-page.component.html',
  styleUrls: ['./editar-calendar-page.component.css']
})
export class EditarCalendarPageComponent implements OnInit, AfterViewInit {
  
  ActualizarForm:FormGroup;
  
  id:string;
  ObjCalendar:CalendarModel[];

 
  

  constructor(private _formBuilder: FormBuilder, private _Route:ActivatedRoute,
               private _DataService:DataService, private _Router:Router) {
    
    
    this.ObjCalendar = [] 
    this.id = '';

    this.ActualizarForm = this._formBuilder.group({
      // Datos encabezado
      nombre: ['', Validators.required],
      dia: ['', ],
      hora: ['',Validators.required],
      lunes: [''],
      martes: [''],
      miercoles: [''], 
      jueves: [''],
      viernes: [''],
      sabado: [''],
      domingo: [''],
      estado: ['S', Validators.required]
  })

}




ngOnInit(): void {
  this.id = ""+this._Route.snapshot.paramMap.get('id');
  //this._DataService.ConsularReg(this.id);
  
  this.consultarHorario();  

}


consultarHorario(){
  this._DataService.ConsularReg(this.id)
  .subscribe(
    e => {
      this.ObjCalendar = e
    })
  }


ngAfterViewInit(): void {
  setTimeout(()=>{
    this.AsignarFormulario()
  },2000)
}


  
  AsignarFormulario(){
    console.log(this.ObjCalendar);
    console.log(this.ObjCalendar[0].nombre);
    
    this.ActualizarForm.controls['nombre'].setValue(this.ObjCalendar[0].nombre)
    this.ActualizarForm.controls['lunes'].setValue(this.ObjCalendar[0].lunes)
    this.ActualizarForm.controls['martes'].setValue(this.ObjCalendar[0].martes)
    this.ActualizarForm.controls['miercoles'].setValue(this.ObjCalendar[0].miercoles)
    this.ActualizarForm.controls['jueves'].setValue(this.ObjCalendar[0].jueves)
    this.ActualizarForm.controls['viernes'].setValue(this.ObjCalendar[0].viernes)
    this.ActualizarForm.controls['sabado'].setValue(this.ObjCalendar[0].sabado)
    this.ActualizarForm.controls['domingo'].setValue(this.ObjCalendar[0].domingo)
    
    
  }
  
  cancelar(){
    this._Router.navigate(["TimbreAutomatico?/Home/Listado/Activos"]);
  }
  
  ejecutar(){
  
  }
}
