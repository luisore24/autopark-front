import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTipoVehiculoComponent } from './listar-tipo-vehiculo.component';

describe('ListarTipoVehiculoComponent', () => {
  let component: ListarTipoVehiculoComponent;
  let fixture: ComponentFixture<ListarTipoVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarTipoVehiculoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarTipoVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
