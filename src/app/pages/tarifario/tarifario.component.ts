import { Component } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { TarifarioDTO } from '../../_model/TarifarioDTO';
import { TarifarioDialogComponent } from './tarifario-dialog/tarifario-dialog.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TarifarioService } from '../../_service/tarifario.service';

@Component({
  selector: 'app-tarifario',
  standalone: true,
  imports: [MatTableModule,MatIconModule,MatFormFieldModule,MatCardModule,MatInputModule,MatButtonModule],
  templateUrl: './tarifario.component.html',
  styleUrl: './tarifario.component.css'
})
export class TarifarioComponent {

  dataSource!: MatTableDataSource<TarifarioDTO>;
  displayedColumns: string[] = ['idtarifa', 'descripcion', 'tipoVehiculoDTO', 'monto', 'accion'];

  tarifarios!: TarifarioDTO[];

  constructor(private tarifarioService: TarifarioService, private router:Router,public dialog : MatDialog){ }

  ngOnInit(): void {

    this.tarifarioService.getTarifarios().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);

      this.tarifarioService.refresh.subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
      });

    });
    /* this.tarifarioService.getTarifarios().subscribe(
      data=>{
        this.tarifarios=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    ); */
  }


  openDialog(tarifario? : TarifarioDTO){
    let mar = tarifario!=null ? tarifario : new TarifarioDTO();
    this.dialog.open(TarifarioDialogComponent, {
      width : '400px',
      data : mar 
    });
  }
  delete(id : number){
    this.tarifarioService.deleteTarifario(id).subscribe(() =>{
      this.tarifarioService.getTarifarios().subscribe(data => {
        this.tarifarioService.refresh.next(data);
      });
    });
  }

  applyFilter(event: Event) {
   /*  const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase(); */
  }

}
