import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ClienteService } from '../../../servicio/cliente.service';
import { Cliente } from '../../../modelos/Cliente';

@Component({
  selector: 'app-edit-cliente',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule,FormsModule],
  templateUrl: './edit-cliente.component.html',
  styleUrl: './edit-cliente.component.css'
})
export class EditClienteComponent {
  constructor(private router:Router, private clienteService:ClienteService){}

  regCliente = new Cliente();

  ngOnInit():void{
    this.editar();
  }

  editar(){
    let id=JSON.parse(localStorage.getItem('id') as string);
    this.clienteService.getClienteId(id).subscribe(data=>{
      this.regCliente=data;
    });
  }

  actualizar(cliente:Cliente){
    this.clienteService.updateCliente(cliente).subscribe(data=>{
      this.regCliente=data;
      this.router.navigate(['clientes']);
    })
  }
}
