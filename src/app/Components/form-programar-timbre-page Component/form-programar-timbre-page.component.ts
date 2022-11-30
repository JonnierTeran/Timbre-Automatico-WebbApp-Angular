//Modulos del componente
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
}
