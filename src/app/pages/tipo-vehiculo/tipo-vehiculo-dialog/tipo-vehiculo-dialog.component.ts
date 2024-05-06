import { Component, Inject } from '@angular/core';
import { TipoVehiculo } from '../../../_model/TipoVehiculo';
import { TipoVehiculoService } from '../../../_service/tipo-vehiculo.service';
import { TipoVehiculoComponent } from '../tipo-vehiculo.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-tipo-vehiculo-dialog',
  standalone: true,
  imports: [MatDialogModule, MatIconModule,MatFormFieldModule,MatCardModule,MatInputModule,MatButtonModule,FormsModule],
  templateUrl: './tipo-vehiculo-dialog.component.html',
  styleUrl: './tipo-vehiculo-dialog.component.css'
})
export class TipoVehiculoDialogComponent {
  tipoVehiculo! : TipoVehiculo;


  constructor(private tipoVehiculoService : TipoVehiculoService,
  public dialogRef : MatDialogRef<TipoVehiculoComponent>,
  @Inject(MAT_DIALOG_DATA) public data : TipoVehiculo) { }

  ngOnInit(): void {
    this.tipoVehiculo = new TipoVehiculo();
    this.tipoVehiculo.id = this.data.id;
    this.tipoVehiculo.des_tipoVehiculo = this.data.des_tipoVehiculo
  }

  save(){
    if(!this.data == null){
      this.tipoVehiculoService.updateTipoVehiculo(this.tipoVehiculo).subscribe(() => {
        this.tipoVehiculoService.getTipoVehiculos().subscribe(data =>{
          this.tipoVehiculoService.refresh.next(data);

        });
      });
    }
    else{
      this.tipoVehiculoService.createTipoVehiculo(this.tipoVehiculo).subscribe(() => {
        this.tipoVehiculoService.getTipoVehiculos().subscribe(data =>{
          this.tipoVehiculoService.refresh.next(data);
        });
      });
    }
    this.dialogRef.close();
  }

  cancel(){
    this.dialogRef.close();
  }
}
