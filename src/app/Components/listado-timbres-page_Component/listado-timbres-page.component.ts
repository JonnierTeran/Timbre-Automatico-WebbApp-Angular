import { Component, OnInit } from '@angular/core';
import { CalendarModel } from 'src/app/Models/Calendar.models';
import { CalendarService } from 'src/app/Services/Calendar.services';
import { DataService } from 'src/app/Services/Data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-timbres-page',
  templateUrl: './listado-timbres-page.component.html',
  styleUrls: ['./listado-timbres-page.component.css']
})
export class ListadoTimbresPageComponent implements OnInit {
  
  public Calendar:CalendarModel[];

  constructor(private _CalendarService:CalendarService, private _DataService:DataService) {
    this.Calendar = this._CalendarService.Calendar;

   }

  ngOnInit(): void {
  }


  Eliminar(Id:number, Pos:number){
    Swal.fire({
      title: 'Eliminar registro',
      text: "Desea eliminar este Registro?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Registro eliminado exitosamente',
          '********************',
          'success'
          
        )
        //this.Router.navigate(["Loggin"])
        this._CalendarService.DeleteCalendar(Pos)
        this._DataService.deleteCalendar(Id).subscribe(
          e => console.log(e)
        )
      }
    })
  }
}
