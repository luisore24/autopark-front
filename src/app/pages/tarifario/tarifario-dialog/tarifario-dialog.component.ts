import { Component, Inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { TarifarioDTO } from '../../../_model/TarifarioDTO';
import { TarifarioComponent } from '../tarifario.component';
import { TarifarioService } from '../../../_service/tarifario.service';
import { TipoVehiculoDTO } from '../../../_model/TipoVehiculoDTO';
import { TipoVehiculoService } from '../../../_service/tipo-vehiculo.service';

@Component({
  selector: 'app-tarifario-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule,FormsModule,MatSelectModule,MatButtonModule,MatInputModule,MatCardModule,MatFormFieldModule],
  templateUrl: './tarifario-dialog.component.html',
  styleUrl: './tarifario-dialog.component.css'
})
export class TarifarioDialogComponent {

  tarifario! : TarifarioDTO;
  tvehiculo! : TipoVehiculoDTO[];


  constructor(private tarifarioService : TarifarioService,
    private tvehiculoService : TipoVehiculoService,
  public dialogRef : MatDialogRef<TarifarioComponent>,
  @Inject(MAT_DIALOG_DATA) public data : TarifarioDTO) { }

  ngOnInit(): void {
    this.getTipoVehiculos();
    this.tarifario = new TarifarioDTO();
    this.tarifario.idtarifa = this.data.idtarifa;
    this.tarifario.descripcion = this.data.descripcion
    this.tarifario.tipoVehiculoDTO = this.data.tipoVehiculoDTO;
    this.tarifario.monto = this.data.monto;
  }

  save(){
    if(this.data.idtarifa){
      this.tarifarioService.updateTarifario(this.tarifario).subscribe(() => {
        this.tarifarioService.getTarifarios().subscribe(data =>{
          this.tarifarioService.refresh.next(data);

        });
      });
    }
    else{
      this.tarifarioService.createTarifario(this.tarifario).subscribe(() => {
        this.tarifarioService.getTarifarios().subscribe(data =>{
          this.tarifarioService.refresh.next(data);
        });
      });
    }
    this.dialogRef.close();
  }

  cancel(){
    this.dialogRef.close();
  }


  getTipoVehiculos(){
    this.tvehiculoService.getTipoVehiculos().subscribe(data => {
      this.tvehiculo = data;
    });
  }

  compareTipoVehiculo(obj1 : TipoVehiculoDTO, obj2 : TipoVehiculoDTO){
    return obj1 === undefined || obj2 === undefined || obj1 === null || obj2 === null ? false : obj1.id == obj2.id; 
  }


}
