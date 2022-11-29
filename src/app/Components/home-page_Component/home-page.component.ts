import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public reloj:any

  constructor(private Router:Router) { }

  ngOnInit(): void {
    setInterval(()=>{
      moment.locale("es")
      this.reloj = moment().format('MMMM Do YYYY, h:mm:ss a');
    }, 1000);

    this.Router.navigate(["TimbreAutomatico?/Home/Formulario/Registro"]);
   
    
  }

 
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
