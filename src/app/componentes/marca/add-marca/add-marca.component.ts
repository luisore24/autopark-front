import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MarcaService } from '../../../servicio/marca.service';
import { Marca } from '../../../modelos/Marca';

@Component({
  selector: 'app-add-marca',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, FormsModule],
  templateUrl: './add-marca.component.html',
  styleUrl: './add-marca.component.css'
})
export class AddMarcaComponent {
  
  constructor(private router:Router, private marcaService:MarcaService){}

  regMarca = new Marca();

  guardar(marca:Marca){
    this.marcaService.createMarca(marca).subscribe(
      data=>{
        this.router.navigate(['marcas']);
      }
    )
  }
}