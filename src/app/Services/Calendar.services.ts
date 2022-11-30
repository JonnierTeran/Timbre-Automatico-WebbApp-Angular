import { Injectable } from "@angular/core";
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
        console.log(Obj);
        
       // this._dataService.RegistrarCalendar(Obj)
    }
    
    
}