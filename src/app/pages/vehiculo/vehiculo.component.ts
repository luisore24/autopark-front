import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatTableDataSource, MatTableModule} from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { VehiculoDTO } from '../../_model/VehiculoDTO';
import { VehiculoService } from '../../_service/vehiculo.service';
import { VehiculoDialogComponent } from './vehiculo-dialog/vehiculo-dialog.component';

@Component({
  selector: 'app-vehiculo',
  standalone: true,
  imports: [MatTableModule,MatIconModule,MatFormFieldModule,MatCardModule,MatInputModule,MatButtonModule],
  templateUrl: './vehiculo.component.html',
  styleUrl: './vehiculo.component.css'
})
export class VehiculoComponent {
  dataSource!: MatTableDataSource<VehiculoDTO>;
  displayedColumns: string[] = ['id', 'placa', 'color' ,'tipoVehiculoDTO','marcaDTO','accion'];

  vehiculo?:VehiculoDTO[];

  constructor(private vehiculoService:VehiculoService, private router:Router,public dialog : MatDialog){ }

  ngOnInit(): void {

    this.vehiculoService.getVehiculos().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

    this.vehiculoService.refresh.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }


  openDialog(vehiculo? : VehiculoDTO){
    let mar = vehiculo!=null ? vehiculo : new VehiculoDTO();
    this.dialog.open(VehiculoDialogComponent, {
      width : '400px',
      data : mar 
    });
  }
  delete(id : number){
    this.vehiculoService.deleteVehiculo(id).subscribe(() =>{
      this.vehiculoService.getVehiculos().subscribe(data => {
        this.vehiculoService.refresh.next(data);
      });
    });
  }

  applyFilter(event: Event) {
   /*  const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase(); */
  }
}
