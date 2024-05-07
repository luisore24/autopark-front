import { Component, Inject } from '@angular/core';
import { RegistroParqueoDTO } from '../../../_model/RegistroParqueoDTO';
import { CommonModule } from '@angular/common';
import moment from 'moment';
import { VehiculoDTO } from '../../../_model/VehiculoDTO';
import { RegistroParqueoService } from '../../../_service/registro-parqueo.service';
import { VehiculoService } from '../../../_service/vehiculo.service';
import { TipoVehiculoDTO } from '../../../_model/TipoVehiculoDTO';
import { TipoVehiculoService } from '../../../_service/tipo-vehiculo.service';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { RegistroParqueoComponent } from '../registro-parqueo.component';
import { MarcaService } from '../../../_service/marca.service';
import { MarcaDTO } from '../../../_model/MarcaDTO';

@Component({
  selector: 'app-registro-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, FormsModule, MatSelectModule, MatButtonModule, MatInputModule, MatCardModule, MatFormFieldModule],
  templateUrl: './registro-dialog.component.html',
  styleUrl: './registro-dialog.component.css'
})
export class RegistroDialogComponent {

  registroParqueoDTO!: RegistroParqueoDTO;

  car!: VehiculoDTO;
  placa!: string;
  color!: string;
  tipoVehiculo!: TipoVehiculoDTO;

  marca!: MarcaDTO;
  marcas!: MarcaDTO[];

  neoCar!: VehiculoDTO;
  tvehiculo!: TipoVehiculoDTO[];


  carroPlaca!: VehiculoDTO;

  constructor(private registroParqueoService: RegistroParqueoService,
    private vehiculoService: VehiculoService,
    private tvehiculoService: TipoVehiculoService,
    private marcaService: MarcaService,
    public dialogRef: MatDialogRef<RegistroParqueoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RegistroParqueoDTO) { }

  ngOnInit(): void {
    this.getTipoVehiculos();
    this.getMarcas()
  }

  registrar() {

    try {
      let registroParqueoDTO = new RegistroParqueoDTO();

      let localISOTime = moment().format('YYYY-MM-DDTHH:mm:ss.sss');
      //busca la placa, si existe no actualiza el registro,solo toma los datos ya almacenados
      this.vehiculoService.buscarPlaca(this.placa).subscribe((data) => {
        if (data) {
          registroParqueoDTO.horaFechaIngreso = localISOTime;
          registroParqueoDTO.vehiculoDTO = data;
          registroParqueoDTO.estado = false;
          this.registroParqueoService.createRegistroParqueo(registroParqueoDTO).subscribe(() => {
            this.registroParqueoService.getRegistroParqueos().subscribe(data => {
              this.registroParqueoService.refresh.next(data);
            })
          });
          console.log('registrado')
        }
        //si no existe, en ese caso registra los datos ingresados en el formulario
        else {
          let neoCar = new VehiculoDTO();
          neoCar.placa = this.placa;
          neoCar.tipoVehiculoDTO = this.tipoVehiculo;
          neoCar.marcaDTO = this.marca;
          neoCar.color = this.color;
          this.vehiculoService.createVehiculo(neoCar).subscribe(data => {
            registroParqueoDTO.horaFechaIngreso =localISOTime;
            registroParqueoDTO.vehiculoDTO = data;
            registroParqueoDTO.estado = false;
            this.registroParqueoService.createRegistroParqueo(registroParqueoDTO).subscribe(() => {
              this.registroParqueoService.getRegistroParqueos().subscribe(data => {
                this.registroParqueoService.refresh.next(data);
              })
            });
          });
          console.log('else validador');
        }
        console.log(registroParqueoDTO);
      })

    }
    catch (error) {
      console.log(error);
    }

    this.dialogRef.close();

  }
//metodo para validar si la placa existe en el registro
  verificarVehiculo(placa: string) {

    this.vehiculoService.buscarPlaca(placa).subscribe(data => this.carroPlaca = data);;
    if (this.carroPlaca != null || this.carroPlaca != 'undefined') {
      console.log('if validador');
      return this.carroPlaca;
    }
    else {

      let neoCar = new VehiculoDTO();
      neoCar.placa = this.placa;
      neoCar.tipoVehiculoDTO = this.tipoVehiculo;
      neoCar.marcaDTO = this.marca;
      neoCar.color = this.color;
      this.vehiculoService.createVehiculo(neoCar).subscribe(data => neoCar = data);
      console.log('else validador');
      return neoCar;
    }

  }



  getTipoVehiculos() {
    this.tvehiculoService.getTipoVehiculos().subscribe(data => {
      this.tvehiculo = data;
    });
  }

  getMarcas() {
    this.marcaService.getMarcas().subscribe(data => {
      this.marcas = data;
    });
  }

  compareTipoVehiculo(obj1: TipoVehiculoDTO, obj2: TipoVehiculoDTO) {
    return obj1 === undefined || obj2 === undefined || obj1 === null || obj2 === null ? false : obj1.id == obj2.id;
  }

  compareMarcas(obj1: MarcaDTO, obj2: MarcaDTO) {
    return obj1 === undefined || obj2 === undefined || obj1 === null || obj2 === null ? false : obj1.id == obj2.id;
  }

  cancel() {
    this.dialogRef.close();
  }

}
