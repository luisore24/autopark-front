import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEstacionamientoComponent } from './edit-estacionamiento.component';

describe('EditEstacionamientoComponent', () => {
  let component: EditEstacionamientoComponent;
  let fixture: ComponentFixture<EditEstacionamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditEstacionamientoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditEstacionamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
