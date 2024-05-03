import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MarcaService } from '../../../servicio/marca.service';
import { Marca } from '../../../modelos/Marca';

@Component({
  selector: 'app-listar-marca',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './listar-marca.component.html',
  styleUrl: './listar-marca.component.css'
})
export class ListarMarcaComponent implements OnInit{
  
  marcas?:Marca[];

  constructor(private marcaService:MarcaService, private router:Router){ }

  ngOnInit(): void {
    this.marcaService.getMarcas().subscribe(
      data=>{
        this.marcas=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    );
  }

  nuevo():void{
    this.router.navigate(['nuevoMarca']);
  }
  editar(marca:Marca):void{
    localStorage.setItem("id",marca.id.toString());
    this.router.navigate(['editarMarca']);
  }
  eliminar(marca:Marca):void{
    this.marcaService.deleteMarca(marca).subscribe(data=>{
      this.marcas=this.marcas!.filter(c=>c!==marca)
    });
  }
}
