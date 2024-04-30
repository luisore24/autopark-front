import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { Cliente } from '../../../modelos/Cliente';
import { ClienteService } from '../../../servicio/cliente.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-cliente',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, FormsModule],
  templateUrl: './add-cliente.component.html',
  styleUrl: './add-cliente.component.css'
})
export class AddClienteComponent {
  
  constructor(private router:Router, private clienteService:ClienteService){}

  regCliente = new Cliente();

  guardar(cliente:Cliente){
    this.clienteService.createCliente(cliente).subscribe(
      data=>{
        this.router.navigate(['clientes']);
      }
    )
  }
}
