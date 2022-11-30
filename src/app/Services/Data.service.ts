import { UserModel } from "../Models/user.models";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Injectable} from '@angular/core'
import { CalendarModel } from "../Models/Calendar.models";
import { Observable } from "rxjs";


@Injectable()
export class DataService{
    //Arreglo para almacenar usuarios registrados
    user:UserModel[];

    //Arreglo para horarios
    Calendar:CalendarModel[]
    url="https://nancy-server.onrender.com/api";
   // url="http://localhost:3000/api";

    
      private HEADERS: HttpHeaders;

    
    //Contructor: Inicializa el servicio y atributos
    constructor(private _HttpClient: HttpClient){
        this.user= [];
        this.Calendar= [];
        this.HEADERS = new HttpHeaders({
           // 'Content-Type': 'application/x-www-form-urlencoded',
            //'Access-Control-Allow-Origin':'http://localhost:4200/',
           // 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
          });
     }
    
    //Metodo para obtener los datos de los usuarios registrados desde una Api 
    public GetUser(){
        
       this._HttpClient.get<UserModel[]>('https://nancy-server.onrender.com/api/users' )
        .subscribe(
            (Response:UserModel[]) =>  {
                 Response.forEach((element) =>{
                        this.user.push(element)
                 })
            } , 
            Error => {
                console.log(Error)})        
    }

    //Gett De Horarios programados
    public GetHorarios(){
      this._HttpClient.get<CalendarModel[]>('https://nancy-server.onrender.com/api/calendar')
      .subscribe(
          (Response:CalendarModel[]) =>  {
               Response.forEach((elemento) =>{
                      this.Calendar.push(elemento)
                     
               })
          } , 
          Error => {
              console.log(Error)}) 

    }

    //Programar un nuevo horario
 addCalendar(Obj?:CalendarModel): Observable<any> {
      return this._HttpClient.post<any>(this.url+'/addcalendar', Obj)


 }

 
 deleteCalendar(Id:number): Observable<any> {
     return this._HttpClient.delete<any>(this.url+'/deletecalendar/'+ Id)


}
 
  

}