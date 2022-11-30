//Modulos del componente
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CalendarModel } from 'src/app/Models/Calendar.models';
import { CalendarService } from 'src/app/Services/Calendar.services';
import { DataService } from 'src/app/Services/Data.service';

//Decorador del componente
@Component({
  selector: 'app-form-programar-timbre-page',
  templateUrl: './form-programar-timbre-page.component.html',
  styleUrls: ['./form-programar-timbre-page.component.css'],
})
//Clase del componente para registrar horarios
export class FormProgramarTimbrePageComponent implements OnInit {

    timbreForm:FormGroup;

  constructor(private _CalendarService: CalendarService,  private _formBuilder: FormBuilder, private _Router: Router, private _DataService: DataService) {

    this.timbreForm = this._formBuilder.group({
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
  })}
  
  ngOnInit(): void {}



  ejecutar(){
    let Obj = this.timbreForm.value;    
    
    if(Obj.lunes === true){
      Obj.lunes = 'S'
    }else{
      Obj.lunes = 'N'
    }

    if(Obj.martes === true){
      Obj.martes = 'S'
    }else{
      Obj.martes = 'N'

      if(Obj.miercoles === true){
        Obj.miercoles = 'S'
      }else{
        Obj.miercoles = 'N'
      }

      if(Obj.jueves === true){
        Obj.jueves = 'S'
      }else{
        Obj.jueves = 'N'
      }

      if(Obj.viernes === true){
        Obj.viernes = 'S'
      }else{
        Obj.viernes = 'N'
      }

      if(Obj.sabado === true){
        Obj.sabado = 'S'
      }else{
        Obj.sabado = 'N'
      }

      if(Obj.domingo === true){
        Obj.domingo = 'S'
      }else{
        Obj.domingo = 'N'
      }
    
      
    let CalendarObj = new CalendarModel(Obj.nombre,'2022-11-02','13:00:00',Obj.lunes,Obj.martes,Obj.miercoles,Obj.jueves,Obj.viernes,Obj.sabado,Obj.domingo,Obj.estado)
    console.log(CalendarObj)

    this._CalendarService.AgregarNuevo(CalendarObj)
    
    this.timbreForm.reset()
    
    this._Router.navigate(['TimbreAutomatico?/Home/Listado/Activos'])
    
      
  }}

  Prueba(){
    
    this._DataService.addCalendar().subscribe(e=>{
      console.log(e);
    })
   // this._DataService.RegistrarCalendar()

  }
   

}

