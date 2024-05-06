import { Component, Inject } from '@angular/core';
import { VehiculoService } from '../../../_service/vehiculo.service';
import { VehiculoComponent } from '../vehiculo.component';
import { Vehiculo } from '../../../_model/Vehiculo';
import { Marca } from '../../../_model/Marca';
import { TipoVehiculo } from '../../../_model/TipoVehiculo';
import { TipoVehiculoService } from '../../../_service/tipo-vehiculo.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MarcaService } from '../../../_service/marca.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vehiculo-dialog',
  standalone: true,
  imports: [FormsModule,MatSelectModule,MatButtonModule,MatInputModule,MatCardModule,MatFormFieldModule],
  templateUrl: './vehiculo-dialog.component.html',
  styleUrl: './vehiculo-dialog.component.css'
})
export class VehiculoDialogComponent {
  vehiculo! : Vehiculo;
  marcas! : Marca[];
  tvehiculo! : TipoVehiculo[]


  constructor(private vehiculoService : VehiculoService,
  private tvehiculoService : TipoVehiculoService,
  private marcaService : MarcaService,
  public dialogRef : MatDialogRef<VehiculoComponent>,
  @Inject(MAT_DIALOG_DATA) public data : Vehiculo) { }

  ngOnInit(): void {
    this.getTipoVehiculos();
    this.getMarcas();
    this.vehiculo = new Vehiculo();
    this.vehiculo.id = this.data.id;
    this.vehiculo.placa = this.data.placa;
    this.vehiculo.color = this.data.color;
    this.vehiculo.tipoVehiculo = this.data.tipoVehiculo;
    this.vehiculo.marca = this.data.marca; 
  }

  save(){
    if(!this.data == null){
      this.vehiculoService.updateVehiculo(this.vehiculo).subscribe(() => {
        this.vehiculoService.getVehiculos().subscribe(data =>{
          this.vehiculoService.refresh.next(data);

        });
      });
    }
    else{
      this.vehiculoService.createVehiculo(this.vehiculo).subscribe(() => {
        this.vehiculoService.getVehiculos().subscribe(data =>{
          this.vehiculoService.refresh.next(data);
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
  getMarcas(){
    this.marcaService.getMarcas().subscribe(data => {
      this.marcas = data;
    });
  }

  compareTipoVehiculo(obj1 : TipoVehiculo, obj2 : TipoVehiculo){
    return obj1 === undefined || obj2 === undefined || obj1 === null || obj2 === null ? false : obj1.id == obj2.id; 
  }

  compareMarcas(obj1 : Marca, obj2 : Marca){
    return obj1 === undefined || obj2 === undefined || obj1 === null || obj2 === null ? false : obj1.id == obj2.id; 
  }

}
