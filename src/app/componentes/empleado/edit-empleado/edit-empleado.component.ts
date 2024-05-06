import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { EmpleadoService } from '../../../servicio/empleado.service';
import { Empleado } from '../../../modelos/Empleado';

@Component({
  selector: 'app-edit-empleado',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule,FormsModule],
  templateUrl: './edit-empleado.component.html',
  styleUrl: './edit-empleado.component.css'
})
export class EditEmpleadoComponent {
  constructor(private router:Router, private empleadoService:EmpleadoService){}

  regEmpleado = new Empleado();

  ngOnInit():void{
    this.editar();
  }

  editar(){
    let id=JSON.parse(localStorage.getItem('idEmpleado') as string);
    this.empleadoService.getEmpleadoId(id).subscribe(data=>{
      this.regEmpleado=data;
    });
  }

  actualizar(empleado:Empleado){
    this.empleadoService.updateEmpleado(empleado).subscribe(data=>{
      this.regEmpleado=data;
      this.router.navigate(['empleados']);
    })
  }
}
