import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParqueoDTO } from '../../../_model/ParqueoDTO';
import { RegistroFacturaComponent } from '../registro-factura.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-detalle-factura',
  standalone: true,
  imports: [FormsModule,CommonModule,MatIconModule,MatFormFieldModule,MatCardModule,MatInputModule,MatButtonModule],
  templateUrl: './detalle-factura.component.html',
  styleUrl: './detalle-factura.component.css'
})
export class DetalleFacturaComponent {


  proforma! : ParqueoDTO;

  constructor(private dialogRef : MatDialogRef<RegistroFacturaComponent>,
    @Inject(MAT_DIALOG_DATA) public data : ParqueoDTO) { }

  ngOnInit(): void {
    this.proforma = new ParqueoDTO();
    this.proforma.id = this.data.id;
    this.proforma.clienteDTO = this.data.clienteDTO;
    this.proforma.fechaParqueo = this.data.fechaParqueo;
    this.proforma.parqueoDetalleDTO = this.data.parqueoDetalleDTO;

  }


  aceptar(){
    this.dialogRef.close();
  }

}
