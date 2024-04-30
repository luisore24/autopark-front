import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { VehiculoService } from '../../../servicio/vehiculo.service';
import { Vehiculo } from '../../../modelos/Vehiculo';

@Component({
  selector: 'app-edit-vehiculo',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule,FormsModule],
  templateUrl: './edit-vehiculo.component.html',
  styleUrl: './edit-vehiculo.component.css'
})
export class EditVehiculoComponent {

  constructor(private router:Router, private vehiculoService:VehiculoService){}

  regVehiculo = new Vehiculo();

  ngOnInit():void{
    this.editar();
  }

  editar(){
    let id=JSON.parse(localStorage.getItem('id') as string);
    this.vehiculoService.getVehiculoId(id).subscribe(data=>{
      this.regVehiculo=data;
    });
  }

  actualizar(vehiculo:Vehiculo){
    this.vehiculoService.updateVehiculo(vehiculo).subscribe(data=>{
      this.regVehiculo=data;
      this.router.navigate(['vehiculos']);
    })
  }
}
