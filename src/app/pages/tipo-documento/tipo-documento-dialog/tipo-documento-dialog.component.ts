import { Component, Inject } from '@angular/core';
import { TipoDocumentoDTO } from '../../../_model/TipoDocumentoDTO';
import { TipoDocumentoService } from '../../../_service/tipo-documento.service';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TipoDocumentoComponent } from '../tipo-documento.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tipo-documento-dialog',
  standalone: true,
  imports: [MatDialogModule,FormsModule,MatSelectModule,MatButtonModule,MatInputModule,MatCardModule,MatFormFieldModule],
  templateUrl: './tipo-documento-dialog.component.html',
  styleUrl: './tipo-documento-dialog.component.css'
})
export class TipoDocumentoDialogComponent {
  tipoDocumento! : TipoDocumentoDTO;


  constructor(private tipoDocumentoService : TipoDocumentoService,
  public dialogRef : MatDialogRef<TipoDocumentoComponent>,
  @Inject(MAT_DIALOG_DATA) public data : TipoDocumentoDTO) { }

  ngOnInit(): void {
    this.tipoDocumento = new TipoDocumentoDTO();
    this.tipoDocumento.idTipoDocumento = this.data.idTipoDocumento;
    this.tipoDocumento.descripcion = this.data.descripcion
  }

  save(){
    if(this.data.idTipoDocumento){
      this.tipoDocumentoService.updateTipoDocumento(this.tipoDocumento).subscribe(() => {
        this.tipoDocumentoService.getTipoDocumentos().subscribe(data =>{
          this.tipoDocumentoService.refresh.next(data);

        });
      });
    }
    else{
      this.tipoDocumentoService.createTipoDocumento(this.tipoDocumento).subscribe(() => {
        this.tipoDocumentoService.getTipoDocumentos().subscribe(data =>{
          this.tipoDocumentoService.refresh.next(data);
        });
      });
    }
    this.dialogRef.close();
  }

  cancel(){
    this.dialogRef.close();
  }

}
