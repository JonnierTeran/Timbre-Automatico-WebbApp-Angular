//Import de los modulos necesarios
import { Component, OnInit } from '@angular/core';
//Import del servicio de routers
import { Router } from '@angular/router';
//Import de liberia para el tiempo
import * as moment from 'moment';
//import de libreria para alertas
import Swal from 'sweetalert2';


//Decorador del componente
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
//Clase del componente Home
export class HomePageComponent implements OnInit {
  
  //Atributo para el reloj dinamico
  public reloj:string;
  
  //Constructor Inicializa los servicios y atributos locales
  constructor(private Router:Router) {
    this.reloj ='';
   }
  
  //Hooks inicial
  ngOnInit(): void {

    //Metodo que se ejecuta cada 1000ms
    setInterval(()=>{ //Arrow functions que formatea y ejecuta la hora local en la variable reloj
      moment.locale("es")
      this.reloj = moment().format('MMMM Do YYYY, h:mm:ss a');
    }, 1000);
    
    //Cargamos el componente de registro al cargar el componente home
    this.Router.navigate(["TimbreAutomatico?/Home/Listado/Activos"]);
   
    
  }

  //Metodo salir // Cerrar Sesion con swalert2
  public Salir(){
    Swal.fire({
      title: 'Cerrar Sesion',
      text: "Realmente desea Salir?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Sesion Finalizada',
          '********************',
          'success'
          
        )
        this.Router.navigate(["Loggin"])
      }
    })
  }

}
