import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProgramarTimbrePageComponent } from './form-programar-timbre-page.component';

describe('FormProgramarTimbrePageComponent', () => {
  let component: FormProgramarTimbrePageComponent;
  let fixture: ComponentFixture<FormProgramarTimbrePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProgramarTimbrePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormProgramarTimbrePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
