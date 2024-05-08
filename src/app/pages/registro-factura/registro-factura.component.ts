import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableDataSource, MatTableModule} from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ParqueoDTO } from '../../_model/ParqueoDTO';
import { ParqueoService } from '../../_service/parqueo.service';
import { DetalleFacturaComponent } from './detalle-factura/detalle-factura.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-registro-factura',
  standalone: true,
  imports: [CommonModule,MatTableModule,MatIconModule,MatCardModule,MatButtonModule],
  templateUrl: './registro-factura.component.html',
  styleUrl: './registro-factura.component.css'
})
export class RegistroFacturaComponent {

  dataSource!: MatTableDataSource<ParqueoDTO>;
  displayedColumns: string[] = ['id', 'clienteDTO', 'fechaParqueo','accion'];

  registros ?:ParqueoDTO[];



  constructor(private parqueoService:ParqueoService, private dialog : MatDialog){ }

  ngOnInit(): void {

    this.parqueoService.getParqueos().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);

      this.parqueoService.refresh.subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
      });

    });
  }


  openDialog(factura : ParqueoDTO){
    this.dialog.open(
      DetalleFacturaComponent,{
        width : '70%',
        data : factura
      }
    )
  }



  


}
