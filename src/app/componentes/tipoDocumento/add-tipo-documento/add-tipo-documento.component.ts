import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TipoDocumento } from '../../../modelos/TipoDocumento';
import { TipoDocumentoService } from '../../../servicio/tipo-documento.service';

@Component({
  selector: 'app-add-tipo-documento',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, FormsModule],
  templateUrl: './add-tipo-documento.component.html',
  styleUrl: './add-tipo-documento.component.css'
})
export class AddTipoDocumentoComponent {
  constructor(private router:Router, private tipoDocumentoService:TipoDocumentoService){}

  regTipoDocumento = new TipoDocumento();

  guardar(tipoDocumento:TipoDocumento){
    this.tipoDocumentoService.createTipoDocumento(tipoDocumento).subscribe(
      data=>{
        this.router.navigate(['tipoDocumentos']);
      }
    )
  }
}
