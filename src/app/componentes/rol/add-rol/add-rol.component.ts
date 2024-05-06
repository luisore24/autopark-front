import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { Rol } from '../../../modelos/Rol';
import { RolService } from '../../../servicio/rol.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-rol',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, FormsModule],
  templateUrl: './add-rol.component.html',
  styleUrl: './add-rol.component.css'
})
export class AddRolComponent {
  
  constructor(private router:Router, private rolService:RolService){}

  regRol = new Rol();

  guardar(rol:Rol){
    this.rolService.createRol(rol).subscribe(
      data=>{
        this.router.navigate(['roles']);
      }
    )
  }
}
