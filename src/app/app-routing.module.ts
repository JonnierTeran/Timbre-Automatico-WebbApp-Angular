import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './Components/error-page_Component/error-page.component';
import { FormProgramarTimbrePageComponent } from './Components/form-programar-timbre-page Component/form-programar-timbre-page.component';
import { HomePageComponent } from './Components/home-page_Component/home-page.component';
import { LogginPageComponent } from './Components/loggin-page_Component/loggin-page.component';

const routes: Routes = [
  {path:"" , component:LogginPageComponent},
  {path:"Loggin" , component:LogginPageComponent},
  {path:"TimbreAutomatico?/Home", component: HomePageComponent, children:[
    {path:"Formulario/Registro" , component:FormProgramarTimbrePageComponent}
  ]},
  {path:"**" , component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
