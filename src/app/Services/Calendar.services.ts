//Modelos de datos para el servicio
import { CalendarModel } from '../Models/Calendar.models';

//Servicios externos
import { DataService } from './Data.service';

//Decorador para servicios externos
import { Injectable } from '@angular/core';

//libreria de alertas
import Swal from 'sweetalert2';

//Decorador de servicios
@Injectable()
export class CalendarService {
  //Arreglo de calendarios
  public Calendar: CalendarModel[];

  //**************************************************************************************************************** */
  //Constructor para inicializar servicios y atributos
  constructor(private _dataService: DataService) {
    //Ejecutamos el metodo del servicio para obtener registros de la bd
    this._dataService.GetHorarios();

    //Cargamos el resultado del servicio en el arreglo
    this.Calendar = this._dataService.Calendar;
  }

  //**************************************************************************************************************** */
  //Metodo para agregar un usuario dinamicamente con alertas de confirmacion
  public AgregarNuevo(Obj: CalendarModel) {
    //Agregamos al arreglo dinamicamente
    this.Calendar.push(Obj);
    //Enviamos al metodo del dataservice para registar en la bd
    this._dataService.addCalendar(Obj).subscribe(
      (e) => console.log(e),
      (err) => console.log(err)
    );

    //Alerta de confirmacion
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Horrario Correctamente Asignado',
      showConfirmButton: false,
      timer: 1500,
    });
  }

  //**************************************************************************************************************** */
  //Metodo para eliminar un elemento del arreglo dinamicamente
  public DeleteCalendar(Posicion: number, Id: number) {
    //Ejecutamos el metodo para eliminar un registro en la bd
    this._dataService.deleteCalendar(Id).subscribe(
      (e) => {
        console.log(e);
      },
      (Err) => console.log(Err)
    );
    
    //Eliminamos dinamicamente del arreglo
    this.Calendar.splice(Posicion, 1);
    Swal.fire(
      'Registro eliminado exitosamente',
      '********************',
      'success'
    );
  }
}
