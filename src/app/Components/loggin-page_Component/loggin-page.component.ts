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
  public Users:UserModel;
  
  //Constructor, inicializa el servicio de router
  constructor(private Router: Router, private _Data: DataService) {
    this.UserInput='';
    this.PasswordInput='';
    this.Users = this._Data.GetUser();
   }

  ngOnInit(): void {
    this.Users = this._Data.GetUser();
    console.log(this.Users)
    
  }
  
  //Metodo ingresar, con alerta swalert2
  public Ingresar(Form:any){
    //this.Users.forEach(Element => {
      //console.log(Element)
       
       /**if(this.UserInput === Element.correo && this.PasswordInput === Element.contraseña){
          this.Router.navigate(["TimbreAutomatico?/Home"])
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Credenciales correctas Bienvenido(a)',
              showConfirmButton: false,
              timer: 2500
            })
    Form.reset()

        }*/
    //})
    
  }
  
}
