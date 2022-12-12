//Modulos del componente
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//Servicios
import { Router } from '@angular/router';
import { CalendarService } from 'src/app/Services/Calendar.services';
//Modelos de datos
import { CalendarModel } from 'src/app/Models/Calendar.models';
//Decorador del componente
@Component({
  selector: 'app-form-programar-timbre-page',
  templateUrl: './form-programar-timbre-page.component.html',
  styleUrls: ['./form-programar-timbre-page.component.css'],
})
//Clase del componente para registrar horarios
export class FormProgramarTimbrePageComponent {
  //Formulario reactivo
  timbreForm: FormGroup;

  constructor(
    private _CalendarService: CalendarService,
    private _formBuilder: FormBuilder,
    private _Router: Router
  ) {
    //Instancia del formulario
    this.timbreForm = this._formBuilder.group({
      // Datos encabezado
      nombre: ['', Validators.required],
      dia: [''],
      hora: ['', Validators.required],
      // lunes: [''],
      // martes: [''],
      //miercoles: [''],
      // jueves: [''],
      // viernes: [''],
      // sabado: [''],
      // domingo: [''],
      estado: ['S', Validators.required],
    });
  }

  //Metodo para registrar un nuevo calendario
  public ejecutar() {
    //Guardamos el formulario y su valor en un objeto
    let Obj = this.timbreForm.value;

    //Validamos el objeto y sus checkbox
    /**
     * 
    if (Obj.lunes === true) {
    Obj.lunes = 'S';
    } else {
      Obj.lunes = 'N';
    }

    if (Obj.martes === true) {
      Obj.martes = 'S';
    } else {
      Obj.martes = 'N';
    }

    if (Obj.miercoles === true) {
      Obj.miercoles = 'S';
    } else {
      Obj.miercoles = 'N';
    }

    if (Obj.jueves === true) {
      Obj.jueves = 'S';
    } else {
      Obj.jueves = 'N';
    }

    if (Obj.viernes === true) {
      Obj.viernes = 'S';
    } else {
      Obj.viernes = 'N';
    }

    if (Obj.sabado === true) {
      Obj.sabado = 'S';
    } else {
      Obj.sabado = 'N';
    }

    if (Obj.domingo === true) {
      Obj.domingo = 'S';
    } else {
      Obj.domingo = 'N';
    }
     * 
     */

    //Construimos un nuevo objeto para enviar al servicio
    let CalendarObj = new CalendarModel(
      Obj.nombre,
      Obj.dia,
      Obj.hora,
      // Obj.lunes,
      // Obj.martes,
      // Obj.miercoles,
      // Obj.jueves,
      // Obj.viernes,
      // Obj.sabado,
      // Obj.domingo,
      Obj.estado
    );

    //Se ejecuta el metodo del CalendarService y se envia el objeto por parametro
    this._CalendarService.AgregarNuevo(CalendarObj);
    //Se resetea el formulario y sus valores
    this.timbreForm.reset();
    //Redireccionamos de page
    this._Router.navigate(['TimbreAutomatico?/Home/Listado/Activos']);
  }
}
