import { Injectable } from "@angular/core";
import Swal from "sweetalert2";
import { CalendarModel } from "../Models/Calendar.models";
import { DataService } from "./Data.service";

@Injectable()
export class CalendarService{
    
    public Calendar:CalendarModel[];

    constructor(private _dataService: DataService){
        this._dataService.GetHorarios()
        
        this.Calendar = this._dataService.Calendar;
    }
    
    public AgregarNuevo(Obj:CalendarModel){
        this.Calendar.push(Obj);
      
        this._dataService.addCalendar(Obj).subscribe(
            e => console.log(e)
            
          )
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Horrario Correctamente Asignado',
            showConfirmButton: false,
            timer: 1500
          })
        }

        DeleteCalendar(Index:number){
            this.Calendar.splice(Index,1)
            
        }
    }
    
    
