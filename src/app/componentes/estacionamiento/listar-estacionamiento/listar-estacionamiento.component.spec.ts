import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEstacionamientoComponent } from './listar-estacionamiento.component';

describe('ListarEstacionamientoComponent', () => {
  let component: ListarEstacionamientoComponent;
  let fixture: ComponentFixture<ListarEstacionamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarEstacionamientoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarEstacionamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
