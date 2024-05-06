import { Component, OnInit } from '@angular/core';
import { Rol } from '../../../modelos/Rol';
import { RolService } from '../../../servicio/rol.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-rol',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './listar-rol.component.html',
  styleUrl: './listar-rol.component.css'
})
export class ListarRolComponent implements OnInit  {
  
  roles?:Rol[];

  constructor(private rolService:RolService, private router:Router){ }

  ngOnInit(): void {
    this.rolService.getRoles().subscribe(
      data=>{
        this.roles=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    );
  }

  nuevo():void{
    this.router.navigate(['nuevoRol']);
  }
  editar(rol:Rol):void{
    localStorage.setItem("idRol",rol.idRol.toString());
    this.router.navigate(['editarRol']);
  }
  eliminar(rol:Rol):void{
    this.rolService.deleteRol(rol).subscribe(data=>{
      this.roles=this.roles!.filter(c=>c!==rol)
    });
  }
}
