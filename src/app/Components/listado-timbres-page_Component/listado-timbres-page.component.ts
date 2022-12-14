//Modulo del componente
import { Component, OnInit } from '@angular/core';
//Servicios
import { Router } from '@angular/router';
import { CalendarService } from 'src/app/Services/Calendar.services';
import { DataService } from 'src/app/Services/Data.service';

//Modelos de datos
import { CalendarModel } from 'src/app/Models/Calendar.models';
//Libreria de alertas
import Swal from 'sweetalert2';

//Librerias mqtt
import {
  IMqttMessage,
  IMqttServiceOptions,
  MqttService,
  IPublishOptions,
} from 'ngx-mqtt';
import { IClientSubscribeOptions } from 'mqtt-browser';
import { Subscription } from 'rxjs';
import * as moment from 'moment';


@Component({
  selector: 'app-listado-timbres-page',
  templateUrl: './listado-timbres-page.component.html',
  styleUrls: ['./listado-timbres-page.component.css'],
})
export class ListadoTimbresPageComponent  implements OnInit{
  //Arreglo de registros
  public Calendar: CalendarModel[];
  Reloj:string
   hora!:string
  constructor(
    private _CalendarService: CalendarService,
    private _DataService: DataService,
    private _Router: Router
  ) {

    this.Reloj = ''
    //Inicializamos el arreglo con el arreglo del servicio
    this.Calendar = this._CalendarService.Calendar;
  }
  ngOnInit(): void {
     //Metodo que se ejecuta cada 1000ms
     setInterval(()=>{ //Arrow functions que formatea y ejecuta la hora local en la variable reloj
      this.Calendar.forEach((Element)=>{
        moment.locale("es")
        //Fecha AMD
        let a = moment().format().split("T");
        this.Reloj = a[0]
        //Hora HH:MM
        let Hora = moment().format('HH:MM');
        let fecha = Element.dia.split('T')
        let Hr = a[1].split('-')
        let HoraAsignada = Hr[0].split(':');
        //Hora actual
        this.hora = `${HoraAsignada[0]}:${HoraAsignada[1]}`;
        

        let HoraProgramada = Element.hora.split(":");
        //Hora programada
        let HoraProg = `${HoraProgramada[0]}:${HoraProgramada[1]}`

        //console.log('Fecha asignada ' + fecha[0]);
        //console.log('fecha actual ' + this.Reloj);
        //console.log('Hora asignada ' +  HoraProg);
        //console.log('Hora actual ' +  this.hora);

          if(fecha[0] == this.Reloj && this.hora == HoraProg){
            this.doPublish()
            console.log('Ejecutado');
            
            setTimeout(() => {
              this.doOff()
            }, 8000);

          }
      })
    },30000);


    
  }
  //Metodo para confirmar edicion y redireccionar al form de Edicion. recibe por parametro el id
  //Del registro a editar
  public Editar(id: number, pos :number) {
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
        //Si acepta se pide la contrase??a
        Swal.fire({
          title: "Para confirmar por favor, Digita tu contrase??a",
          input: "password",
          showCancelButton: true,
          confirmButtonText: "Guardar",
          cancelButtonText: "Cancelar",
        })
        .then(resultado => {
          if (resultado.value) {
            let Pass = resultado.value;
            //Validamos la contrase??a
            if (Pass === sessionStorage.getItem("Password")){
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Contrase??a correcta',
                showConfirmButton: false,
                timer: 1000,
              });
              //Redireccion luego de la confirmacion del pass
              this._Router.navigate([
                'TimbreAutomatico?/Home/Registros/UpdateReg/',
                id, pos ,
              ]);
            }else{
              Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Contrase??a Incorrecta, intente nuevamente!',
                showConfirmButton: false,
                timer: 1000,
              });
            }
          }
    });
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


  /************************************************************************************* */
  
  private curSubscription: Subscription | undefined;
  connection = {
    hostname: '192.168.100.231',
    port: 9001,
    //path: '/mqtt',
    //clean: true, // Retain session
    //connectTimeout: 4000, // Timeout period
    //reconnectPeriod: 4000, // Reconnect period
    // Authentication information
    clientId: 'mqttx_597046f4',
    username: 'emqx_test',
    password: 'emqx_test',
    protocol: 'ws',
  }
  subscription = {
    topic: 'cmnd/rasmota/Power',
    qos: 0,
  };
  publish = {
    topic: 'cmnd/tasmota/Power',
    qos: 0,
    payload: 'ON',
  };
  off = {
    topic: 'cmnd/tasmota/Power',
    qos: 0,
    payload: 'OFF',
  };
  receiveNews = '';
  qosList = [
    { label: 0, value: 0 },
    { label: 1, value: 1 },
    { label: 2, value: 2 },
  ];
  client: MqttService | undefined;
  isConnection = false;
  subscribeSuccess = false;

  // Create a connection
  createConnection() {
    // Connection string, which allows the protocol to specify the connection method to be used
    // ws Unencrypted WebSocket connection
    // wss Encrypted WebSocket connection
    // mqtt Unencrypted TCP connection
    // mqtts Encrypted TCP connection
    try {
      this.client?.connect(this.connection as IMqttServiceOptions)
    } catch (error) {
      console.log('mqtt.connect error', error);
    }
    this.client?.onConnect.subscribe(() => {
      this.isConnection = true
      console.log('Connection succeeded!');
    });
    this.client?.onError.subscribe((error: any) => {
      this.isConnection = false
      console.log('Connection failed', error);
    });
    this.client?.onMessage.subscribe((packet: any) => {
      this.receiveNews = this.receiveNews.concat(packet.payload.toString())
      console.log(`Received message ${packet.payload.toString()} from topic ${packet.topic}`)
    })
  }

  // ????????????
  doSubscribe() {
    const { topic, qos } = this.subscription
    this.curSubscription = this.client?.observe(topic, { qos } as IClientSubscribeOptions).subscribe((message: IMqttMessage) => {
      this.subscribeSuccess = true
      console.log('Subscribe to topics res', message.payload.toString())
    })
  }
  // ????????????
 
  // ????????????
  doPublish() {
    const { topic, qos, payload } = this.publish
    console.log(this.publish)
    this.client?.unsafePublish(topic, payload, { qos } as IPublishOptions)
    console.log('Alarma activada')
  }

  doOff() {
    const { topic, qos, payload } = this.off
    console.log(this.publish)
    this.client?.unsafePublish(topic, payload, { qos } as IPublishOptions)
    console.log('alarma desactivada')
  }
}
