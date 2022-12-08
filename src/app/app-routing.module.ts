//Modulos necesarios
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes de la aplicacion
import { ErrorPageComponent } from './Components/error-page_Component/error-page.component';
import { FormProgramarTimbrePageComponent } from './Components/form-programar-timbre-page Component/form-programar-timbre-page.component';
import { HomePageComponent } from './Components/home-page_Component/home-page.component';
import { ListadoTimbresPageComponent } from './Components/listado-timbres-page_Component/listado-timbres-page.component';
import { LogginPageComponent } from './Components/loggin-page_Component/loggin-page.component';
import { EditarCalendarPageComponent } from './Components/editar-calendar-pageComponent/editar-calendar-page.component';

//Arreglo de las rutas de la aplicacion
const routes: Routes = [
  {path:"" , component:LogginPageComponent},
  {path:"Loggin" , component:LogginPageComponent},
  //Componente con rutas hijas
  {path:"TimbreAutomatico?/Home", component: HomePageComponent, children:[
    {path:"Listado/Activos", component: ListadoTimbresPageComponent},
    {path:"Formulario/Registro" , component:FormProgramarTimbrePageComponent},
    {path:"Registros/UpdateReg" , component: EditarCalendarPageComponent},
    {path:"Registros/UpdateReg/:id" , component: EditarCalendarPageComponent}
  ]}, //Fin de rutas hijas
  {path:"**" , component:ErrorPageComponent}
];

//Decordador del modulo 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
//Export del la clase
export class AppRoutingModule { }
