import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTipoDocumentoComponent } from './edit-tipo-documento.component';

describe('EditTipoDocumentoComponent', () => {
  let component: EditTipoDocumentoComponent;
  let fixture: ComponentFixture<EditTipoDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTipoDocumentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditTipoDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
