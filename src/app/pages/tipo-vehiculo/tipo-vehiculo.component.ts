import { Component } from '@angular/core';
import { TipoVehiculo } from '../../_model/TipoVehiculo';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TipoVehiculoService } from '../../_service/tipo-vehiculo.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TipoVehiculoDialogComponent } from './tipo-vehiculo-dialog/tipo-vehiculo-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-tipo-vehiculo',
  standalone: true,
  imports: [MatTableModule,MatIconModule,MatFormFieldModule,MatCardModule,MatInputModule,MatButtonModule],
  templateUrl: './tipo-vehiculo.component.html',
  styleUrl: './tipo-vehiculo.component.css'
})
export class TipoVehiculoComponent {
  dataSource!: MatTableDataSource<TipoVehiculo>;
  displayedColumns: string[] = ['id', 'des_tipoVehiculo','accion'];

  tipoVehiculos!: TipoVehiculo[];

  constructor(private tipoVehiculoService: TipoVehiculoService, private router:Router,public dialog : MatDialog){ }

  ngOnInit(): void {

    this.tipoVehiculoService.getTipoVehiculos().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

    this.tipoVehiculoService.refresh.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    /* this.tipoVehiculoService.getTipoVehiculos().subscribe(
      data=>{
        this.tipoVehiculos=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    ); */
  }


  openDialog(tipoVehiculo? : TipoVehiculo){
    let mar = tipoVehiculo!=null ? tipoVehiculo : new TipoVehiculo();
    this.dialog.open(TipoVehiculoDialogComponent, {
      width : '400px',
      data : mar 
    });
  }
  delete(tipoVehiculo : TipoVehiculo){
    this.tipoVehiculoService.deleteTipoVehiculo(tipoVehiculo).subscribe(() =>{
      this.tipoVehiculoService.getTipoVehiculos().subscribe(data => {
        this.tipoVehiculoService.refresh.next(data);
      });
    });
  }

  applyFilter(event: Event) {
   /*  const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase(); */
  }
}
