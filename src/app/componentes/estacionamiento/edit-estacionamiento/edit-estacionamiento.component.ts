import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { EstacionamientoService } from '../../../servicio/estacionamiento.service';
import { Estacionamiento } from '../../../modelos/Estacionamiento';

@Component({
  selector: 'app-edit-estacionamiento',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule,FormsModule],
  templateUrl: './edit-estacionamiento.component.html',
  styleUrl: './edit-estacionamiento.component.css'
})
export class EditEstacionamientoComponent {
  constructor(private router:Router, private estacionamientoService:EstacionamientoService){}

  regEstacionamiento = new Estacionamiento();

  ngOnInit():void{
    this.editar();
  }

  editar(){
    let id=JSON.parse(localStorage.getItem('idEstacionamiento') as string);
    this.estacionamientoService.getEstacionamientoId(id).subscribe(data=>{
      this.regEstacionamiento=data;
    });
  }

  actualizar(estacionamiento:Estacionamiento){
    this.estacionamientoService.updateEstacionamiento(estacionamiento).subscribe(data=>{
      this.regEstacionamiento=data;
      this.router.navigate(['estacionamientos']);
    })
  }
}
