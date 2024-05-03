import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../modelos/Cliente';
import { ClienteService } from '../../../servicio/cliente.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-cliente',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './listar-cliente.component.html',
  styleUrl: './listar-cliente.component.css'
})
export class ListarClienteComponent implements OnInit  {
  
  clientes?:Cliente[];

  constructor(private clienteService:ClienteService, private router:Router){ }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
      data=>{
        this.clientes=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    );
  }

  nuevo():void{
    this.router.navigate(['nuevoCliente']);
  }
  editar(cliente:Cliente):void{
    localStorage.setItem("id",cliente.id.toString());
    this.router.navigate(['editarCliente']);
  }
  eliminar(cliente:Cliente):void{
    this.clienteService.deleteCliente(cliente).subscribe(data=>{
      this.clientes=this.clientes!.filter(c=>c!==cliente)
    });
  }
}
