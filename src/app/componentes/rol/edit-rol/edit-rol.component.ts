import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { RolService } from '../../../servicio/rol.service';
import { Rol } from '../../../modelos/Rol';

@Component({
  selector: 'app-edit-rol',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule,FormsModule],
  templateUrl: './edit-rol.component.html',
  styleUrl: './edit-rol.component.css'
})
export class EditRolComponent {
  constructor(private router:Router, private rolService:RolService){}

  regRol = new Rol();

  ngOnInit():void{
    this.editar();
  }

  editar(){
    let idRol=JSON.parse(localStorage.getItem('idRol') as string);
    this.rolService.getRolId(idRol).subscribe(data=>{
      this.regRol=data;
    });
  }

  actualizar(rol:Rol){
    this.rolService.updateRol(rol).subscribe(data=>{
      this.regRol=data;
      this.router.navigate(['roles']);
    })
  }
}
