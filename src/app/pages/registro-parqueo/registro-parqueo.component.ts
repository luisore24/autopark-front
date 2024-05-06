import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculoDTO } from '../../_model/VehiculoDTO';
import {MatTableDataSource, MatTableModule} from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { RegistroParqueoDTO } from '../../_model/RegistroParqueoDTO';
import { RegistroParqueoService } from '../../_service/registro-parqueo.service';
import { RegistroDialogComponent } from './registro-dialog/registro-dialog.component';
import moment from 'moment';

@Component({
  selector: 'app-registro-parqueo',
  standalone: true,
  imports: [CommonModule, MatTableModule,MatIconModule,MatFormFieldModule,MatCardModule,MatInputModule,MatButtonModule],
  templateUrl: './registro-parqueo.component.html',
  styleUrl: './registro-parqueo.component.css'
})
export class RegistroParqueoComponent {

  dataSource!: MatTableDataSource<RegistroParqueoDTO>;
  displayedColumns: string[] = ['idRegistroParqueo', 'vehiculoDTO', 'horaFechaIngreso' ,'horaFechaSalida','tiempoParqueo','accion'];

  vehiculo?:VehiculoDTO[];

  constructor(private registroPService:RegistroParqueoService, public dialog : MatDialog){ }

  ngOnInit(): void {

    this.registroPService.getRegistroParqueos().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);

      this.registroPService.refresh.subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
      });

    });
  }


  openDialog(){
    let reg =  new RegistroParqueoDTO();
    this.dialog.open(RegistroDialogComponent, {
      width : '400px',
      data : reg 
    });
  }
  /* delete(id : number){
    this.registroPService.deleteRegistroParqueo(id).subscribe(() =>{
      this.registroPService.getRegistroParqueos().subscribe(data => {
        this.registroPService.refresh.next(data);
      });
    });
  } */

  salida(id: number){
    this.registroPService.getRegistroParqueoId(id).subscribe(data =>{
      let localISOTime = moment().format('YYYY-MM-DDTHH:mm:ss.sss');
      let registro = data;
      registro.horaFechaIngreso = data.horaFechaIngreso;
      registro.horaFechaSalida = localISOTime;
      this.registroPService.salidaRegistroParqueo(registro).subscribe( () => {
        this.registroPService.getRegistroParqueos().subscribe(data => {
          this.registroPService.refresh.next(data);
        });
      });
    });
  }

}