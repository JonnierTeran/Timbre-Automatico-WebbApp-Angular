import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-loggin-page',
  templateUrl: './loggin-page.component.html',
  styleUrls: ['./loggin-page.component.css']
})
export class LogginPageComponent implements OnInit {

  constructor(private Router: Router) { }

  ngOnInit(): void {
  }

  public Ingresar(){
    this.Router.navigate(["TimbreAutomatico?/Home"])
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Credenciales correctas Bienvenido(a)',
      showConfirmButton: false,
      timer: 2500
    })
  }

}
