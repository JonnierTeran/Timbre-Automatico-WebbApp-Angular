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
        
       this._HttpClient.get<UserModel[]>('https://nancy-server.onrender.com/api/users')//,{ headers: this.HEADERS })
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
      this._HttpClient.get<CalendarModel[]>('https://nancy-server.onrender.com/api/calendar')//,{ headers: this.HEADERS })
      .subscribe(
          (Response:CalendarModel[]) =>  {
               Response.forEach((elemento) =>{
                      this.Calendar.push(elemento)
                      alert
               })
          } , 
          Error => {
              console.log(Error)}) 

    }

    //Programar un nuevo horario
    public RegistrarCalendar(Obj?:CalendarModel){
      let Prueba;//:CalendarModel;
     // Prueba= Object{'Hora12','2022-11-02','12:00:00','S','N','S','S','S','S','N','S'
     Prueba = {
      nombre:'Hora12',
       dia:'2022-11-02',
       hora:'12:00:00',
       lunes:'S',
       martes:'S',
       miercoles:'S',
       jueves:'S',
       viernes:'S',
       sabado:'S',
       domingo:'S',
       estado:'S'
    }

    
  this._HttpClient.post<any>('https://nancy-server.onrender.com/api/addcalendar',Prueba)//,{ headers: this.HEADERS })
      .subscribe(
        Response => {
          console.log(Response)
        }, Error => console.log(Error)
      )

    }




    addCalendar(Obj?:CalendarModel): Observable<any> {
      let Prueba = {
        nombre:'Hora12',
         dia:'2022-11-02',
         hora:'12:00:00',
         lunes:'S',
         martes:'S',
         miercoles:'S',
         jueves:'S',
         viernes:'S',
         sabado:'S',
         domingo:'S',
         estado:'S'
      }
  
      return this._HttpClient.post<any>(this.url+'/addcalendar', Prueba)
 }
    

}