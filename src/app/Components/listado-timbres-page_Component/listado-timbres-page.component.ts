import { Component, OnInit } from '@angular/core';
import { CalendarModel } from 'src/app/Models/Calendar.models';
import { CalendarService } from 'src/app/Services/Calendar.services';

@Component({
  selector: 'app-listado-timbres-page',
  templateUrl: './listado-timbres-page.component.html',
  styleUrls: ['./listado-timbres-page.component.css']
})
export class ListadoTimbresPageComponent implements OnInit {
  
  public Calendar:CalendarModel[];

  constructor(private _CalendarService:CalendarService) {
    this.Calendar = this._CalendarService.Calendar;
   }

  ngOnInit(): void {
  }

}
