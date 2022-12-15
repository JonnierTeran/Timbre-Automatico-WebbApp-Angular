//Modulos Necesarios para el module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//MQTT
import { IMqttServiceOptions, MqttModule } from 'ngx-mqtt';

//Componentes de la aplicacion
import { AppComponent } from './app.component';
import { LogginPageComponent } from './Components/loggin-page_Component/loggin-page.component';
import { ErrorPageComponent } from './Components/error-page_Component/error-page.component';
import { HomePageComponent } from './Components/home-page_Component/home-page.component';
import { FormProgramarTimbrePageComponent } from './Components/form-programar-timbre-page Component/form-programar-timbre-page.component';
import { ListadoTimbresPageComponent } from './Components/listado-timbres-page_Component/listado-timbres-page.component';
import { EditarCalendarPageComponent } from './Components/editar-calendar-pageComponent/editar-calendar-page.component';

//Servicios
import { DataService } from './Services/Data.service';
import { CalendarService } from './Services/Calendar.services';



export const connection: IMqttServiceOptions = {
  hostname: '192.168.100.231',
  port: 1883,
  //path: '/mqtt',
  //clean: true, // 保留会话
  //connectTimeout: 4000, // 超时时间
  //reconnectPeriod: 4000, // 重连时间间隔
  // 认证信息
  clientId: 'mqttx_597046f4',
  username: 'emqx_test',
  password: 'emqx_test',
  //protocol: 'ws',
  connectOnCreate: false,
}




//Decorador del modulo
@NgModule({
  declarations: [
    //Componentes
    AppComponent,
    LogginPageComponent,
    ErrorPageComponent,
    HomePageComponent,
    FormProgramarTimbrePageComponent,
    ListadoTimbresPageComponent,
    EditarCalendarPageComponent
  ],
  imports: [
    //Modulos
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MqttModule.forRoot(connection)
  ],
  //Servicios
  providers: [DataService, CalendarService],
  //Componente pricipal
  bootstrap: [AppComponent]
})
export class AppModule { }
