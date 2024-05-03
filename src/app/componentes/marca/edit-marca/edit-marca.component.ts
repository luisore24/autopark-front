import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MarcaService } from '../../../servicio/marca.service';
import { Marca } from '../../../modelos/Marca';

@Component({
  selector: 'app-edit-marca',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule,FormsModule],
  templateUrl: './edit-marca.component.html',
  styleUrl: './edit-marca.component.css'
})
export class EditMarcaComponent {
  constructor(private router:Router, private marcaService:MarcaService){}

  regMarca = new Marca();

  ngOnInit():void{
    this.editar();
  }

  editar(){
    let id=JSON.parse(localStorage.getItem('id') as string);
    this.marcaService.getMarcaId(id).subscribe(data=>{
      this.regMarca=data;
    });
  }

  actualizar(marca:Marca){
    this.marcaService.updateMarca(marca).subscribe(data=>{
      this.regMarca=data;
      this.router.navigate(['marcas']);
    })
  }
}
