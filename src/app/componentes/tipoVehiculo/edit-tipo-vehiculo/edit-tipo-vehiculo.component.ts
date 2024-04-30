import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { TipoVehiculoService } from '../../../servicio/tipo-vehiculo.service';
import { TipoVehiculo } from '../../../modelos/TipoVehiculo';

@Component({
  selector: 'app-edit-tipo-vehiculo',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule,FormsModule],
  templateUrl: './edit-tipo-vehiculo.component.html',
  styleUrl: './edit-tipo-vehiculo.component.css'
})
export class EditTipoVehiculoComponent {
  constructor(private router:Router, private tipoVehiculoService:TipoVehiculoService){}

  regTipoVehiculo = new TipoVehiculo();

  ngOnInit():void{
    this.editar();
  }

  editar(){
    let id=JSON.parse(localStorage.getItem('id') as string);
    this.tipoVehiculoService.getTipoVehiculoId(id).subscribe(data=>{
      this.regTipoVehiculo=data;
    });
  }

  actualizar(tipoVehiculo:TipoVehiculo){
    this.tipoVehiculoService.updateTipoVehiculo(tipoVehiculo).subscribe(data=>{
      this.regTipoVehiculo=data;
      this.router.navigate(['tipoVehiculos']);
    })
  }
}
