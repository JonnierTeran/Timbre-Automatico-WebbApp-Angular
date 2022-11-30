//Modulos del componente
import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormControl, FormGroup, Validators } from '@angular/forms';
=======
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
>>>>>>> 1fc723203c64312fcc734be64447cf6dc6014c03
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

<<<<<<< HEAD
  CalendarForm = new FormGroup({
    Nombre: new FormControl('', [Validators.required]),
    Fecha: new FormControl('', [Validators.required]),
    Hora: new FormControl('', [Validators.required]),
    Lunes: new FormControl(''),
    Martes: new FormControl(''),
    Miercoles: new FormControl(''),
    Jueves: new FormControl(''),
    Viernes: new FormControl(''),
    Sabado: new FormControl(''),
    Domingo: new FormControl(''),
  

  });

  constructor(private _CalendarService: CalendarService) {}
  ngOnInit(): void {}

  onSubmit(){
    this.CalendarForm.reset
  }
=======
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
   
>>>>>>> 1fc723203c64312fcc734be64447cf6dc6014c03
}
