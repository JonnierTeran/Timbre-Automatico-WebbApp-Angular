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
  ObjCalendar:CalendarModel;
  ObjCalendar1:any[]=[];

  constructor(private _formBuilder: FormBuilder, private _Route:ActivatedRoute, private _DataService:DataService, private _Router:Router) {
    
    
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

  this.ObjCalendar =  new CalendarModel('','','','','','','','','','','')
  
  this.id = '';

  
}




ngOnInit(): void {
  this.id = ""+this._Route.snapshot.paramMap.get('id');
  //this._DataService.ConsularReg(this.id);
  
  this.consultarHorario();  
  
}

ngAfterViewInit(): void {
  
 // this.ObjCalendar = this._DataService.Calendaredit;
  this.AsignarFormulario()

}

consultarHorario(){
  this._DataService.ConsularReg(this.id!).subscribe(
    e => this.ObjCalendar = e
  )
  

  }

  
  AsignarFormulario(){
    console.log(this.ObjCalendar);
    this.ActualizarForm.controls['nombre'].setValue( "malparido")
  
    
  }
  
  cancelar(){
    this._Router.navigate(["TimbreAutomatico?/Home/Listado/Activos"]);
  }
  
  ejecutar(){
  
  }
}
