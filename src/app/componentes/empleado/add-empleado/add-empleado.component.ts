import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { Empleado } from '../../../modelos/Empleado';
import { EmpleadoService } from '../../../servicio/empleado.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-empleado',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, FormsModule],
  templateUrl: './add-empleado.component.html',
  styleUrl: './add-empleado.component.css'
})
export class AddEmpleadoComponent {
  
  constructor(private router:Router, private empleadoService:EmpleadoService){}

  regEmpleado = new Empleado();

  guardar(empleado:Empleado){
    this.empleadoService.createEmpleado(empleado).subscribe(
      data=>{
        this.router.navigate(['empleados']);
      }
    )
  }
}
