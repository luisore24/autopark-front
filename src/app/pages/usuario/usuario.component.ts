import { Component } from '@angular/core';
import { CommonModule} from '@angular/common'
import { Router } from '@angular/router';
import {MatTableDataSource, MatTableModule} from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioDTO } from '../../_model/UsuarioDTO';
import { UsuarioDialogComponent } from './usuario-dialog/usuario-dialog.component';
import { UsuarioService } from '../../_service/usuario.service';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule,MatTableModule,MatIconModule,MatFormFieldModule,MatCardModule,MatInputModule,MatButtonModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

  dataSource!: MatTableDataSource<UsuarioDTO>;
  displayedColumns: string[] = ['idUsuario', 'name', 'lastname' ,'tipoDocumentoDTO','nroDocumento', 'correo','telefono','username','rolDTO','accion'];

  usuarios?:UsuarioDTO[];

  constructor(private usuarioService:UsuarioService, private router:Router,public dialog : MatDialog){ }

  ngOnInit(): void {

    this.usuarioService.getUsuarios().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

    this.usuarioService.refresh.subscribe(data => {
      
      this.dataSource = new MatTableDataSource(data);
    });
    /* this.usuarioService.getUsuarios().subscribe(
      data=>{
        this.usuarios=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    ); */
  }

  openDialog(usuario? : UsuarioDTO){
    console.log(usuario);
    let mar = usuario != null ? usuario : new UsuarioDTO();
    this.dialog.open(UsuarioDialogComponent, {
      width : '400px',
      data : mar 
    });
  }
  delete(id : number){
    this.usuarioService.deleteUsuario(id).subscribe(() =>{
      this.usuarioService.getUsuarios().subscribe(data => {
        this.usuarioService.refresh.next(data);
      });
    });
  }

  applyFilter(event: Event) {
   /*  const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase(); */
  }

}
