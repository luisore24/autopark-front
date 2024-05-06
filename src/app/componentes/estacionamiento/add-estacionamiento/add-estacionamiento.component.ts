import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { Estacionamiento } from '../../../modelos/Estacionamiento';
import { EstacionamientoService } from '../../../servicio/estacionamiento.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-estacionamiento',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, FormsModule],
  templateUrl: './add-estacionamiento.component.html',
  styleUrl: './add-estacionamiento.component.css'
})
export class AddEstacionamientoComponent {
  
  constructor(private router:Router, private estacionamientoService:EstacionamientoService){}

  regEstacionamiento = new Estacionamiento();

  guardar(estacionamiento:Estacionamiento){
    this.estacionamientoService.createEstacionamiento(estacionamiento).subscribe(
      data=>{
        this.router.navigate(['estacionamientos']);
      }
    )
  }
}
