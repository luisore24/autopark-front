import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TipoVehiculo } from '../../../modelos/TipoVehiculo';
import { TipoVehiculoService } from '../../../servicio/tipo-vehiculo.service';

@Component({
  selector: 'app-add-tipo-vehiculo',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, FormsModule],
  templateUrl: './add-tipo-vehiculo.component.html',
  styleUrl: './add-tipo-vehiculo.component.css'
})
export class AddTipoVehiculoComponent {
  constructor(private router:Router, private tipoVehiculoService:TipoVehiculoService){}

  regTipoVehiculo = new TipoVehiculo();

  guardar(tipoVehiculo:TipoVehiculo){
    this.tipoVehiculoService.createTipoVehiculo(tipoVehiculo).subscribe(
      data=>{
        this.router.navigate(['tipoVehiculos']);
      }
    )
  }
}
