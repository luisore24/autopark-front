import { Component } from '@angular/core';
import { EstacionamientoDialogComponent } from './estacionamiento-dialog/estacionamiento-dialog.component';
import {MatTableDataSource, MatTableModule} from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { EstacionamientoDTO } from '../../_model/EstacionamientoDTO';
import { EstacionamientoService } from '../../_service/estacionamiento.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-estacionamiento',
  standalone: true,
  imports: [MatTableModule,MatIconModule,MatFormFieldModule,MatCardModule,MatInputModule,MatButtonModule],
  templateUrl: './estacionamiento.component.html',
  styleUrl: './estacionamiento.component.css'
})
export class EstacionamientoComponent {

  dataSource!: MatTableDataSource<EstacionamientoDTO>;
  displayedColumns: string[] = ['idEstacionamiento', 'codEstacionamiento', 'nivel','tipoEstacionamiento','accion'];

  estacionamientos!: EstacionamientoDTO[];

  constructor(private estacionamientoService: EstacionamientoService, private router:Router,public dialog : MatDialog){ }

  ngOnInit(): void {

    this.estacionamientoService.getEstacionamientos().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);

      this.estacionamientoService.refresh.subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
      });

    });
    /* this.estacionamientoService.getEstacionamientos().subscribe(
      data=>{
        this.estacionamientos=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    ); */
  }


  openDialog(estacionamiento? : EstacionamientoDTO){
    let mar = estacionamiento!=null ? estacionamiento : new EstacionamientoDTO();
    this.dialog.open(EstacionamientoDialogComponent, {
      width : '400px',
      data : mar 
    });
  }
  delete(id : number){
    this.estacionamientoService.deleteEstacionamiento(id).subscribe(() =>{
      this.estacionamientoService.getEstacionamientos().subscribe(data => {
        this.estacionamientoService.refresh.next(data);
      });
    });
  }

  applyFilter(event: Event) {
   /*  const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase(); */
  }

}
