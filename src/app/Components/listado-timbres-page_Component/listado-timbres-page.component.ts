//Modulo del componente
import { Component } from '@angular/core';
//Servicios
import { Router } from '@angular/router';
import { CalendarService } from 'src/app/Services/Calendar.services';
import { DataService } from 'src/app/Services/Data.service';

//Modelos de datos
import { CalendarModel } from 'src/app/Models/Calendar.models';
//Libreria de alertas
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-timbres-page',
  templateUrl: './listado-timbres-page.component.html',
  styleUrls: ['./listado-timbres-page.component.css'],
})
export class ListadoTimbresPageComponent {
  //Arreglo de registros
  public Calendar: CalendarModel[];

  constructor(
    private _CalendarService: CalendarService,
    private _DataService: DataService,
    private _Router: Router
  ) {
    //Inicializamos el arreglo con el arreglo del servicio
    this.Calendar = this._CalendarService.Calendar;
  }

  //Metodo para confirmar edicion y redireccionar al form de Edicion. recibe por parametro el id
  //Del registro a editar
  public Editar(id: number) {
    Swal.fire({
      title: 'Actualizar Registro',
      text: 'Desea Actualizar este Registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        //Redireccion luego de la confirmacion
        this._Router.navigate([
          'TimbreAutomatico?/Home/Registros/UpdateReg/',
          id,
        ]);
      }
    });
  }

  //Metodo eliminar, Recibe por parametros, el id del registro en la bd, y la posicion en el arreglo
  public Eliminar(Id: number, Pos: number) {
    //Alerta de confirmacion
    Swal.fire({
      title: 'Eliminar registro',
      text: 'Desea eliminar este Registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        //Ejecucucion del metodo del servicio
        this._CalendarService.DeleteCalendar(Pos, Id);
      }
    });
  }
}
