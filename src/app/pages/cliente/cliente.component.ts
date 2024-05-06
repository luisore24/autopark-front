import { Component } from '@angular/core';
import { ClienteDTO } from '../../_model/ClienteDTO';
import { ClienteService } from '../../_service/cliente.service';
import { Router } from '@angular/router';
import {MatTableDataSource, MatTableModule} from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ClienteDialogComponent } from './cliente-dialog/cliente-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [MatTableModule,MatIconModule,MatFormFieldModule,MatCardModule,MatInputModule,MatButtonModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {

  dataSource!: MatTableDataSource<ClienteDTO>;
  displayedColumns: string[] = ['id', 'apePaterno', 'apeMaterno' ,'nombres','tipoDocumentoDTO', 'dni','email','accion'];

  clientes?:ClienteDTO[];

  constructor(private clienteService:ClienteService, private router:Router,public dialog : MatDialog){ }

  ngOnInit(): void {

    this.clienteService.getClientes().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

    this.clienteService.refresh.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    /* this.clienteService.getClientes().subscribe(
      data=>{
        this.clientes=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    ); */
  }


  openDialog(cliente? : ClienteDTO){
    let mar = cliente!=null ? cliente : new ClienteDTO();
    this.dialog.open(ClienteDialogComponent, {
      width : '400px',
      data : mar 
    });
  }
  delete(id : number){
    this.clienteService.deleteCliente(id).subscribe(() =>{
      this.clienteService.getClientes().subscribe(data => {
        this.clienteService.refresh.next(data);
      });
    });
  }

  applyFilter(event: Event) {
   /*  const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase(); */
  }

}