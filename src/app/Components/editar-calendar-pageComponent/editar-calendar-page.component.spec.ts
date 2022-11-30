import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCalendarPageComponent } from './editar-calendar-page.component';

describe('EditarCalendarPageComponent', () => {
  let component: EditarCalendarPageComponent;
  let fixture: ComponentFixture<EditarCalendarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCalendarPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarCalendarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
