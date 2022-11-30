//Modulos Necesarios para el module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

//Componentes de la aplicacion
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogginPageComponent } from './Components/loggin-page_Component/loggin-page.component';
import { ErrorPageComponent } from './Components/error-page_Component/error-page.component';
import { HomePageComponent } from './Components/home-page_Component/home-page.component';
import { FormProgramarTimbrePageComponent } from './Components/form-programar-timbre-page Component/form-programar-timbre-page.component';
//Servicios
import { DataService } from './Services/Data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListadoTimbresPageComponent } from './Components/listado-timbres-page_Component/listado-timbres-page.component';
import { CalendarService } from './Services/Calendar.services';

//Decorador del modulo
@NgModule({
  declarations: [
    //Componentes
    AppComponent,
    LogginPageComponent,
    ErrorPageComponent,
    HomePageComponent,
    FormProgramarTimbrePageComponent,
    ListadoTimbresPageComponent
  ],
  imports: [
    //Modulos
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  //Servicios
  providers: [DataService, CalendarService],
  //Componente pricipal
  bootstrap: [AppComponent]
})
export class AppModule { }
