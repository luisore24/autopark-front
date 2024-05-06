import { Component, Inject } from '@angular/core';
import { Cliente } from '../../../_model/Cliente';
import { TipoDocumento } from '../../../_model/TipoDocumento';
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

@Component({
  selector: 'app-cliente-dialog',
  standalone: true,
  imports: [FormsModule,MatSelectModule,MatButtonModule,MatInputModule,MatCardModule,MatFormFieldModule],
  templateUrl: './cliente-dialog.component.html',
  styleUrl: './cliente-dialog.component.css'
})
export class ClienteDialogComponent {
  cliente! : Cliente;
  tDocumento! : TipoDocumento[];


  constructor(private clienteService : ClienteService,
  private tdocumentoService : TipoDocumentoService,
  public dialogRef : MatDialogRef<ClienteComponent>,
  @Inject(MAT_DIALOG_DATA) public data : Cliente) { }

  ngOnInit(): void {
    this.getTipoDocumento();
    this.cliente = new Cliente();
    this.cliente.id = this.data.id;
    this.cliente.apeMaterno = this.data.apeMaterno;
    this.cliente.apePaterno = this.data.apePaterno;
    this.cliente.nombres = this.data.nombres;
    this.cliente.tipoDocumento = this.data.tipoDocumento;
    this.cliente.dni = this.data.dni;
    this.cliente.fechaNacimiento = this.data.fechaNacimiento;
    this.cliente.email = this.data.email;  
  }

  save(){
    if(!this.data == null){
      this.clienteService.updateCliente(this.cliente).subscribe(() => {
        this.clienteService.getClientes().subscribe(data =>{
          this.clienteService.refresh.next(data);

        });
      });
    }
    else{
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

  compareTipoDocumento(obj1 : TipoDocumento, obj2 : TipoDocumento){
    return obj1 === undefined || obj2 === undefined || obj1 === null || obj2 === null ? false : obj1.idTipoDocumento == obj2.idTipoDocumento; 
  }


}
