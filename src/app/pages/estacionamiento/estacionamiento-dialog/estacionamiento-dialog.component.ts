import { Component, Inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { EstacionamientoDTO } from '../../../_model/EstacionamientoDTO';
import { EstacionamientoService } from '../../../_service/estacionamiento.service';
import { EstacionamientoComponent } from '../estacionamiento.component';

@Component({
  selector: 'app-estacionamiento-dialog',
  standalone: true,
  imports: [MatDialogModule,FormsModule,MatSelectModule,MatButtonModule,MatInputModule,MatCardModule,MatFormFieldModule],
  templateUrl: './estacionamiento-dialog.component.html',
  styleUrl: './estacionamiento-dialog.component.css'
})
export class EstacionamientoDialogComponent {
  estacionamiento! : EstacionamientoDTO;


  constructor(private estacionamientoService : EstacionamientoService,
  public dialogRef : MatDialogRef<EstacionamientoComponent>,
  @Inject(MAT_DIALOG_DATA) public data : EstacionamientoDTO) { }

  ngOnInit(): void {
    this.estacionamiento = new EstacionamientoDTO();
    this.estacionamiento.idEstacionamiento = this.data.idEstacionamiento;
    this.estacionamiento.codEstacionamiento = this.data.codEstacionamiento
    this.estacionamiento.nivel = this.data.nivel;
    this.estacionamiento.tipoEstacionamiento = this.data.tipoEstacionamiento;
    this.estacionamiento.estadoEstacionamiento = this.data.estadoEstacionamiento;
  }

  save(){
    if(this.data != null){
      this.estacionamientoService.updateEstacionamiento(this.estacionamiento).subscribe(() => {
        this.estacionamientoService.getEstacionamientos().subscribe(data =>{
          this.estacionamientoService.refresh.next(data);

        });
      });
    }
    else{
      this.estacionamientoService.createEstacionamiento(this.estacionamiento).subscribe(() => {
        this.estacionamientoService.getEstacionamientos().subscribe(data =>{
          this.estacionamientoService.refresh.next(data);
        });
      });
    }
    this.dialogRef.close();
  }

  cancel(){
    this.dialogRef.close();
  }

}
