import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTipoVehiculoComponent } from './edit-tipo-vehiculo.component';

describe('EditTipoVehiculoComponent', () => {
  let component: EditTipoVehiculoComponent;
  let fixture: ComponentFixture<EditTipoVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTipoVehiculoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditTipoVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
