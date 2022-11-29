//Modulos necesarios
import { Component, OnInit } from '@angular/core';
//Servicio del router
import { Router } from '@angular/router';
import { UserModel } from 'src/app/Models/user.models';
import { DataService } from 'src/app/Services/Data.service';
//Libreria para alertas
import Swal from 'sweetalert2';


//Decorador del componente
@Component({
  selector: 'app-loggin-page',
  templateUrl: './loggin-page.component.html',
  styleUrls: ['./loggin-page.component.css']
})
//Clase del componente
export class LogginPageComponent implements OnInit {

  //Inputs
  public UserInput:string;
  public PasswordInput:string;

  //Arreglo con los Usuarios registrados en la base de datos
  public Users:UserModel[];
  
  //Constructor, inicializa el servicio de router
  constructor(private Router: Router, private _Data: DataService) {
    //Se ejecuta el metodo get del servicio
    this._Data.GetUser();

    this.UserInput='';
    this.PasswordInput='';
    this.Users = this._Data.user;
   }

  ngOnInit(): void {}
  


  //Metodo ingresar, con alerta swalert2
  public Ingresar(Form:any){
    this.Users.forEach(Element => {
       if(this.UserInput === Element.correo && this.PasswordInput === Element.contraseña){
         
           sessionStorage.setItem('Usser', Element.correo)
           sessionStorage.setItem('Password', Element.contraseña)
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Credenciales correctas Bienvenido(a)',
              showConfirmButton: false,
              timer: 2500
            })
            this.Router.navigate(["TimbreAutomatico?/Home"])

        }else{
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Upss...Credenciales Incorrectas',
            showConfirmButton: false,
            timer: 2500
          })
          Form.reset()
        }
    })
    
  }
  
}
