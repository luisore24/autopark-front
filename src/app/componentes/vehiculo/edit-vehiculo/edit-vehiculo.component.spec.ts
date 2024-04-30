import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVehiculoComponent } from './edit-vehiculo.component';

describe('EditVehiculoComponent', () => {
  let component: EditVehiculoComponent;
  let fixture: ComponentFixture<EditVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditVehiculoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
