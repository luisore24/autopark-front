import { Component } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { RolDTO } from '../../_model/RolDTO';
import { RolService } from '../../_service/rol.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RolDialogComponent } from './rol-dialog/rol-dialog.component';

@Component({
  selector: 'app-rol',
  standalone: true,
  imports: [MatTableModule,MatIconModule,MatFormFieldModule,MatCardModule,MatInputModule,MatButtonModule],
  templateUrl: './rol.component.html',
  styleUrl: './rol.component.css'
})
export class RolComponent {
  dataSource!: MatTableDataSource<RolDTO>;
  displayedColumns: string[] = ['idRol', 'role', 'accion'];

  rols!: RolDTO[];

  constructor(private rolService: RolService, private router:Router,public dialog : MatDialog){ }

  ngOnInit(): void {

    this.rolService.getRoles().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);

      this.rolService.refresh.subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
      });

    });
    /* this.rolService.getRols().subscribe(
      data=>{
        this.rols=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    ); */
  }


  openDialog(rol? : RolDTO){
    let mar = rol!=null ? rol : new RolDTO();
    this.dialog.open(RolDialogComponent, {
      width : '400px',
      data : mar 
    });
  }
  delete(id : number){
    this.rolService.deleteRol(id).subscribe(() =>{
      this.rolService.getRoles().subscribe(data => {
        this.rolService.refresh.next(data);
      });
    });
  }

  applyFilter(event: Event) {
   /*  const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase(); */
  }
}
