//Modulo del componente
import { Component } from '@angular/core';
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


@Component({
  selector: 'app-listado-timbres-page',
  templateUrl: './listado-timbres-page.component.html',
  styleUrls: ['./listado-timbres-page.component.css'],
})
export class ListadoTimbresPageComponent {
  //Arreglo de registros
  public Calendar: CalendarModel[];

  constructor(
    private _CalendarService: CalendarService,
    private _DataService: DataService,
    private _Router: Router
  ) {
    //Inicializamos el arreglo con el arreglo del servicio
    this.Calendar = this._CalendarService.Calendar;
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
        //Si acepta se pide la contraseña
        Swal.fire({
          title: "Para confirmar por favor, Digita tu contraseña",
          input: "password",
          showCancelButton: true,
          confirmButtonText: "Guardar",
          cancelButtonText: "Cancelar",
        })
        .then(resultado => {
          if (resultado.value) {
            let Pass = resultado.value;
            //Validamos la contraseña
            if (Pass === sessionStorage.getItem("Password")){
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Contraseña correcta',
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
                title: 'Contraseña Incorrecta, intente nuevamente!',
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

  // 订阅主题
  doSubscribe() {
    const { topic, qos } = this.subscription
    this.curSubscription = this.client?.observe(topic, { qos } as IClientSubscribeOptions).subscribe((message: IMqttMessage) => {
      this.subscribeSuccess = true
      console.log('Subscribe to topics res', message.payload.toString())
    })
  }
  // 取消订阅
 
  // 发送消息
  doPublish() {
    const { topic, qos, payload } = this.publish
    console.log(this.publish)
    this.client?.unsafePublish(topic, payload, { qos } as IPublishOptions)
  }

  doOff() {
    const { topic, qos, payload } = this.off
    console.log(this.publish)
    this.client?.unsafePublish(topic, payload, { qos } as IPublishOptions)
  }
}
