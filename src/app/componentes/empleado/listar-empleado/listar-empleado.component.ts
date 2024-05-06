import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../../modelos/Empleado';
import { EmpleadoService } from '../../../servicio/empleado.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-empleado',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './listar-empleado.component.html',
  styleUrl: './listar-empleado.component.css'
})
export class ListarEmpleadoComponent implements OnInit  {
  
  empleados?:Empleado[];

  constructor(private empleadoService:EmpleadoService, private router:Router){ }

  ngOnInit(): void {
    this.empleadoService.getEmpleados().subscribe(
      data=>{
        this.empleados=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    );
  }

  nuevo():void{
    this.router.navigate(['nuevoEmpleado']);
  }
  editar(empleado:Empleado):void{
    localStorage.setItem("idEmpleado",empleado.idEmpleado.toString());
    this.router.navigate(['editarEmpleado']);
  }
  eliminar(empleado:Empleado):void{
    this.empleadoService.deleteEmpleado(empleado).subscribe(data=>{
      this.empleados=this.empleados!.filter(c=>c!==empleado)
    });
  }
}
