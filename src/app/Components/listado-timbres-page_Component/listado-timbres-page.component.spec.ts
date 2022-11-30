import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoTimbresPageComponent } from './listado-timbres-page.component';

describe('ListadoTimbresPageComponent', () => {
  let component: ListadoTimbresPageComponent;
  let fixture: ComponentFixture<ListadoTimbresPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoTimbresPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoTimbresPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
