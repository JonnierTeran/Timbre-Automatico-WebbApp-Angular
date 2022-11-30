import { CalendarModel } from "../Models/Calendar.models";

export class CalendarService{
    
    public Calendar:CalendarModel[];

    constructor(){
        this.Calendar = [new CalendarModel('Timbre','2022-11-22','10:34:50','S','S','S','S','S','S','S','S'),
        new CalendarModel('Timbre','2022-11-22','10:34:50','S','S','S','S','S','S','S','S'),
        new CalendarModel('Timbre','2022-11-22','10:34:50','S','S','S','S','S','S','S','S')]
    }

    public AgregarNuevo(Obj:CalendarModel){
        this.Calendar.push(Obj);
    }
    
    
}