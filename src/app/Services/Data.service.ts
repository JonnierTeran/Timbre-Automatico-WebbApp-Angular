import { UserModel } from "../Models/user.models";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Injectable} from '@angular/core'
import { CalendarModel } from "../Models/Calendar.models";

@Injectable()
export class DataService{
    //Arreglo para almacenar usuarios registrados
    user:UserModel[];

    //Arreglo para horarios
    Calendar:CalendarModel[]

    
      private HEADERS: HttpHeaders;

    
    //Contructor: Inicializa el servicio y atributos
    constructor(private _HttpClient: HttpClient){
        this.user= [];
        this.Calendar= [];
        this.HEADERS = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
          });
     }
    
    //Metodo para obtener los datos de los usuarios registrados desde una Api 
    public GetUser(){
        
       this._HttpClient.get<UserModel[]>('https://nancy-server.onrender.com/api/users',{ headers: this.HEADERS })
        .subscribe(
            (Response:UserModel[]) =>  {
                 Response.forEach((element) =>{
                        this.user.push(element)
                 })
            } , 
            Error => {
                console.log(Error)})        
    }

    public GetHorarios(){
      this._HttpClient.get<CalendarModel[]>('https://nancy-server.onrender.com/api/calendar',{ headers: this.HEADERS })
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

    

}