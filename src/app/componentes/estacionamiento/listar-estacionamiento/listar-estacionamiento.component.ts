import { Component, OnInit } from '@angular/core';
import { Estacionamiento } from '../../../modelos/Estacionamiento';
import { EstacionamientoService } from '../../../servicio/estacionamiento.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-estacionamiento',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './listar-estacionamiento.component.html',
  styleUrl: './listar-estacionamiento.component.css'
})
export class ListarEstacionamientoComponent implements OnInit  {
  
  estacionamientos?:Estacionamiento[];

  constructor(private estacionamientoService:EstacionamientoService, private router:Router){ }

  ngOnInit(): void {
    this.estacionamientoService.getEstacionamientos().subscribe(
      data=>{
        this.estacionamientos=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    );
  }

  nuevo():void{
    this.router.navigate(['nuevoEstacionamiento']);
  }
  editar(estacionamiento:Estacionamiento):void{
    localStorage.setItem("idEstacionamiento",estacionamiento.idEstacionamiento.toString());
    this.router.navigate(['editarEstacionamiento']);
  }
  eliminar(estacionamiento:Estacionamiento):void{
    this.estacionamientoService.deleteEstacionamiento(estacionamiento).subscribe(data=>{
      this.estacionamientos=this.estacionamientos!.filter(c=>c!==estacionamiento)
    });
  }
}
