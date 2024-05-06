import { Component, Inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ClienteDTO } from '../../../_model/ClienteDTO';
import { TipoDocumentoDTO } from '../../../_model/TipoDocumentoDTO';
import { ClienteService } from '../../../_service/cliente.service';
import { TipoDocumentoService } from '../../../_service/tipo-documento.service';
import { ClienteComponent } from '../cliente.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-cliente-dialog',
  standalone: true,
  imports: [MatDialogModule,CommonModule, FormsModule,MatSelectModule,MatButtonModule,MatInputModule,MatCardModule,MatFormFieldModule],
  templateUrl: './cliente-dialog.component.html',
  styleUrl: './cliente-dialog.component.css'
})
export class ClienteDialogComponent {
  cliente! : ClienteDTO;
  tDocumento! : TipoDocumentoDTO[];


  constructor(private clienteService : ClienteService,
  private tdocumentoService : TipoDocumentoService,
  public dialogRef : MatDialogRef<ClienteComponent>,
  @Inject(MAT_DIALOG_DATA) public data : ClienteDTO) { }

  ngOnInit(): void {
    this.getTipoDocumento();
    this.cliente = new ClienteDTO();
    this.cliente.id = this.data.id;
    this.cliente.apeMaterno = this.data.apeMaterno;
    this.cliente.apePaterno = this.data.apePaterno;
    this.cliente.nombres = this.data.nombres;
    this.cliente.tipoDocumentoDTO = this.data.tipoDocumentoDTO;
    this.cliente.dni = this.data.dni;
    this.cliente.email = this.data.email;  
  }

  save(){
    if(this.data != null){
      this.clienteService.updateCliente(this.cliente).subscribe(() => {
        this.clienteService.getClientes().subscribe(data =>{
          this.clienteService.refresh.next(data);

        });
      });
    }
    else{
      console.log(this.cliente);
      this.clienteService.createCliente(this.cliente).subscribe(() => {
        this.clienteService.getClientes().subscribe(data =>{
          this.clienteService.refresh.next(data);
        });
      });
    }
    this.dialogRef.close();
  }

  cancel(){
    this.dialogRef.close();
  }

  getTipoDocumento(){
    this.tdocumentoService.getTipoDocumentos().subscribe(data => {
      this.tDocumento = data;
    });
  }

  compareTipoDocumento(obj1: TipoDocumentoDTO, obj2: TipoDocumentoDTO) {
    return obj1 && obj2 ? obj1.idTipoDocumento === obj2.idTipoDocumento : obj1 === obj2;
}

}
