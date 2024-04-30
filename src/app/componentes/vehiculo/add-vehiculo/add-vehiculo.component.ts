import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { VehiculoService } from '../../../servicio/vehiculo.service';
import { Vehiculo } from '../../../modelos/Vehiculo';

@Component({
  selector: 'app-add-vehiculo',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, FormsModule],
  templateUrl: './add-vehiculo.component.html',
  styleUrl: './add-vehiculo.component.css'
})
export class AddVehiculoComponent {
  constructor(private router:Router, private vehiculoService:VehiculoService){}

  regVehiculo = new Vehiculo();

  guardar(vehiculo:Vehiculo){
    this.vehiculoService.createVehiculo(vehiculo).subscribe(
      data=>{
        this.router.navigate(['vehiculos']);
      }
    )
  }
}
