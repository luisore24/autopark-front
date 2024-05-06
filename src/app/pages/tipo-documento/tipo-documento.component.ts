import { Component } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { TipoDocumento } from '../../_model/TipoDocumento';
import { TipoDocumentoService } from '../../_service/tipo-documento.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TipoDocumentoDialogComponent } from './tipo-documento-dialog/tipo-documento-dialog.component';

@Component({
  selector: 'app-tipo-documento',
  standalone: true,
  imports: [MatTableModule,MatIconModule,MatFormFieldModule,MatCardModule,MatInputModule,MatButtonModule],
  templateUrl: './tipo-documento.component.html',
  styleUrl: './tipo-documento.component.css'
})
export class TipoDocumentoComponent {
  dataSource!: MatTableDataSource<TipoDocumento>;
  displayedColumns: string[] = ['idTipoDocumento', 'descripcion','accion'];

  tipoDocumentos!: TipoDocumento[];

  constructor(private tipoDocumentoService: TipoDocumentoService, private router:Router,public dialog : MatDialog){ }

  ngOnInit(): void {

    this.tipoDocumentoService.getTipoDocumentos().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

    this.tipoDocumentoService.refresh.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    /* this.tipoDocumentoService.getTipoDocumentos().subscribe(
      data=>{
        this.tipoDocumentos=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    ); */
  }


  openDialog(tipoDocumento? : TipoDocumento){
    let mar = tipoDocumento!=null ? tipoDocumento : new TipoDocumento();
    this.dialog.open(TipoDocumentoDialogComponent, {
      width : '400px',
      data : mar 
    });
  }
  delete(tipoDocumento : TipoDocumento){
    this.tipoDocumentoService.deleteTipoDocumento(tipoDocumento).subscribe(() =>{
      this.tipoDocumentoService.getTipoDocumentos().subscribe(data => {
        this.tipoDocumentoService.refresh.next(data);
      });
    });
  }

  applyFilter(event: Event) {
   /*  const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase(); */
  }
}
