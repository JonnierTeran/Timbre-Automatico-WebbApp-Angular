import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogginPageComponent } from './Components/loggin-page_Component/loggin-page.component';
import { ErrorPageComponent } from './Components/error-page_Component/error-page.component';
import { HomePageComponent } from './Components/home-page_Component/home-page.component';
import { FormProgramarTimbrePageComponent } from './Components/form-programar-timbre-page Component/form-programar-timbre-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LogginPageComponent,
    ErrorPageComponent,
    HomePageComponent,
    FormProgramarTimbrePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
