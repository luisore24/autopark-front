import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MarcaService } from '../../_service/marca.service';
import { Marca } from '../../_model/Marca';
import { MarcaDialogComponent } from './marca-dialog/marca-dialog.component';
import {MatTableModule} from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-marca',
  standalone: true,
  imports: [MatTableModule,MatIconModule,MatFormFieldModule,MatCardModule,MatInputModule,MatButtonModule],
  templateUrl: './marca.component.html',
  styleUrl: './marca.component.css'
})
export class MarcaComponent {
  dataSource!: MatTableDataSource<Marca>;
  displayedColumns: string[] = ['id', 'des_marca', 'accion'];

  marcas!: Marca[];

  constructor(private marcaService: MarcaService, private router:Router,public dialog : MatDialog){ }

  ngOnInit(): void {

    this.marcaService.getMarcas().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);

      this.marcaService.refresh.subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
      });

    });
    /* this.marcaService.getMarcas().subscribe(
      data=>{
        this.marcas=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    ); */
  }


  openDialog(marca? : Marca){
    let mar = marca!=null ? marca : new Marca();
    this.dialog.open(MarcaDialogComponent, {
      width : '400px',
      data : mar 
    });
  }
  delete(marca : Marca){
    this.marcaService.deleteMarca(marca).subscribe(() =>{
      this.marcaService.getMarcas().subscribe(data => {
        this.marcaService.refresh.next(data);
      });
    });
  }

  applyFilter(event: Event) {
   /*  const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase(); */
  }
}
