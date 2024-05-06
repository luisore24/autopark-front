import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEstacionamientoComponent } from './add-estacionamiento.component';

describe('AddEstacionamientoComponent', () => {
  let component: AddEstacionamientoComponent;
  let fixture: ComponentFixture<AddEstacionamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEstacionamientoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEstacionamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
