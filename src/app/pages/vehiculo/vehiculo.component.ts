import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatTableDataSource, MatTableModule} from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { TipoDocumento } from '../../_model/TipoDocumento';
import { MatDialog } from '@angular/material/dialog';
import { Vehiculo } from '../../_model/Vehiculo';
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
  dataSource!: MatTableDataSource<Vehiculo>;
  displayedColumns: string[] = ['id', 'placa', 'color' ,'tipoVehiculo','marca','accion'];

  vehiculo?:Vehiculo[];

  constructor(private vehiculoService:VehiculoService, private router:Router,public dialog : MatDialog){ }

  ngOnInit(): void {

    this.vehiculoService.getVehiculos().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

    this.vehiculoService.refresh.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

    /* this.vehiculoService.getVehiculos().subscribe(
      data=>{
        this.vehiculos=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    ); */
  }

  nuevo():void{
    this.router.navigate(['nuevoVehiculo']);
  }
  editar(vehiculo:Vehiculo):void{
    this.router.navigate(['editarVehiculo']);
  }
  eliminar(vehiculo:Vehiculo):void{
    this.vehiculoService.deleteVehiculo(vehiculo).subscribe(data=>{
      this.vehiculo=this.vehiculo!.filter(c=>c!==vehiculo)
    });
  }

  openDialog(vehiculo? : Vehiculo){
    let mar = vehiculo!=null ? vehiculo : new TipoDocumento();
    this.dialog.open(VehiculoDialogComponent, {
      width : '400px',
      data : mar 
    });
  }
  delete(vehiculo : Vehiculo){
    this.vehiculoService.deleteVehiculo(vehiculo).subscribe(() =>{
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
