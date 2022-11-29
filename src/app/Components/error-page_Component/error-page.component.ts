//Import del modulo
import { Component, OnInit } from '@angular/core';

//Decorador del componente
@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
//Export de la clasee
export class ErrorPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
