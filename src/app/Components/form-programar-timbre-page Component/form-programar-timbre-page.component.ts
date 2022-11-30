//Modulos del componente
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
  constructor(private _CalendarService: CalendarService) {}
  ngOnInit(): void {}
}
