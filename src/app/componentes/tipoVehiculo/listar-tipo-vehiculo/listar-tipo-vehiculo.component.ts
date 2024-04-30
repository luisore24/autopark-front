import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TipoVehiculo } from '../../../modelos/TipoVehiculo';
import { TipoVehiculoService } from '../../../servicio/tipo-vehiculo.service';

@Component({
  selector: 'app-listar-tipo-vehiculo',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterModule],
  templateUrl: './listar-tipo-vehiculo.component.html',
  styleUrl: './listar-tipo-vehiculo.component.css'
})
export class ListarTipoVehiculoComponent {
  tipoVehiculos?:TipoVehiculo[];

  constructor(private tipoVehiculoService:TipoVehiculoService, private router:Router){ }

  ngOnInit(): void {
    this.tipoVehiculoService.getTipoVehiculos().subscribe(
      data=>{
        this.tipoVehiculos=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    );
  }

  nuevo():void{
    this.router.navigate(['nuevoTipoVehiculo']);
  }
  editar(tipoVehiculo:TipoVehiculo):void{
    localStorage.setItem("id",tipoVehiculo.id.toString());
    this.router.navigate(['editarTipoVehiculo']);
  }
  eliminar(tipoVehiculo:TipoVehiculo):void{
    this.tipoVehiculoService.deleteTipoVehiculo(tipoVehiculo).subscribe(data=>{
      this.tipoVehiculos=this.tipoVehiculos!.filter(c=>c!==tipoVehiculo)
    });
  }
}