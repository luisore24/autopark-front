import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../../servicio/vehiculo.service';
import { Vehiculo } from '../../../modelos/Vehiculo';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-vehiculo',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './listar-vehiculo.component.html',
  styleUrl: './listar-vehiculo.component.css'
})
export class ListarVehiculoComponent implements OnInit  {

  vehiculos?:Vehiculo[];

  constructor(private vehiculoService:VehiculoService, private router:Router){ }

  ngOnInit(): void {
    this.vehiculoService.getVehiculos().subscribe(
      data=>{
        this.vehiculos=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    );
  }

  nuevo():void{
    this.router.navigate(['nuevoVehiculo']);
  }
  editar(vehiculo:Vehiculo):void{
    localStorage.setItem("id_vehiculo",vehiculo.id_vehiculo.toString());
    this.router.navigate(['editarVehiculo']);
  }
  eliminar(vehiculo:Vehiculo):void{
    this.vehiculoService.deleteVehiculo(vehiculo).subscribe(data=>{
      this.vehiculos=this.vehiculos!.filter(p=>p!==vehiculo)
    });
  }
}
