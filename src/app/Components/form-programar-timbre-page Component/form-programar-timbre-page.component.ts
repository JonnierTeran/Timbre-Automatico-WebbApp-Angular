//Modulos del componente
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalendarModel } from 'src/app/Models/Calendar.models';
import { CalendarService } from 'src/app/Services/Calendar.services';

//Decorador del componente
@Component({
  selector: 'app-form-programar-timbre-page',
  templateUrl: './form-programar-timbre-page.component.html',
  styleUrls: ['./form-programar-timbre-page.component.css'],
})
//Clase del componente para registrar horarios
export class FormProgramarTimbrePageComponent implements OnInit {

  timbreForm: FormGroup;
  constructor(private _CalendarService: CalendarService,  private _formBuilder: FormBuilder) {
    this.timbreForm = this._formBuilder.group({
      // Datos encabezado
      nombre: ['', Validators.required],
      dia: [''],
      hora: [''],
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
    console.log(this.timbreForm.value);
    
  }
   
}
