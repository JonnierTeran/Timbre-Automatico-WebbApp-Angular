//Modelos de datos
import { CalendarModel } from '../Models/Calendar.models';
import { UserModel } from '../Models/user.models';

//Servicios para peticiones http
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Injectable de servicios externos
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

//Decorador de servicios externos
@Injectable()
//Clase del servicio
export class DataService {
  //Arreglo para almacenar usuarios registrados
  user: UserModel[];
  //Arreglo para horarios
  Calendar: CalendarModel[];
  //Url del backend
  url = 'https://nancy-server.onrender.com/api';
  // url="http://localhost:3000/api";
  //Headers
  private HEADERS: HttpHeaders;
  public Calendaredit: CalendarModel;

  //**********************************************************************************************************************************************/

  //Contructor: Inicializa el servicio y atributos
  constructor(private _HttpClient: HttpClient) {
    this.user = [];
    this.Calendar = [];
    this.Calendaredit = new CalendarModel(
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    );

    this.HEADERS = new HttpHeaders({
      // 'Content-Type': 'application/x-www-form-urlencoded',
      //'Access-Control-Allow-Origin':'http://localhost:4200/',
      // 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    });
  }

  //*******************************************************************************************************************************************/
  //Metodo para obtener los datos de los usuarios registrados desde una Api y agregarlos al arreglo
  public GetUser() {
    this._HttpClient
      .get<UserModel[]>('https://nancy-server.onrender.com/api/users')
      .subscribe(
        (Response: UserModel[]) => {
        //Recorremos el arreglo obtenido y lo agregamos a nuestro arreglo
          Response.forEach((element) => {
            this.user.push(element);
          });
        },
        Error =>  console.log(Error));
  }

  //********************************************************************************************************************************************/

  //metodo Gett para obtener los  Horarios programados desde la base de datos
  public GetHorarios() {
    this._HttpClient
      .get<CalendarModel[]>('https://nancy-server.onrender.com/api/calendar')
      .subscribe(
        (Response: CalendarModel[]) => {
        //Recorremos el arreglo obtenido y lo agregamos a nuestro arreglo
          Response.forEach((elemento) => {
            this.Calendar.push(elemento);
          });
        },
        Error =>  console.log(Error));
  }

  //*********************************************************************************************************************************************/

  //Metodo para Programar un nuevo horario y registrarlo en la base de datos
  public addCalendar(Obj: CalendarModel): Observable<any> {
    return this._HttpClient.post<any>(this.url + '/addcalendar', Obj);
  }

  //********************************************************************************************************************************************/

  //Metodo para Eliminar un horario en la base de datos
  public deleteCalendar(Id: number): Observable<any> {
    return this._HttpClient.delete<any>(this.url + '/deletecalendar/' + Id);
  }

  //*********************************************************************************************************************************************/

  //Metodo para consultar un registro en la base de datos
  public ConsularReg(id: string): Observable<any> {
    return this._HttpClient.get<CalendarModel>(
      'https://nancy-server.onrender.com/api/calendar/' + id
    );
  }
}
