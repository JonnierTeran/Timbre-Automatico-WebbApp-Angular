import { UserModel } from "../Models/user.models";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Injectable} from '@angular/core'

@Injectable()
export class DataService{
    //Arreglo para almacenar usuarios registrados
    user:UserModel[];
      private HEADERS: HttpHeaders;

    
    //Contructor: Inicializa el servicio y atributos
    constructor(private _HttpClient: HttpClient){
        this.user= [];
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

}