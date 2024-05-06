import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { TipoDocumentoService } from '../../../servicio/tipo-documento.service';
import { TipoDocumento } from '../../../modelos/TipoDocumento';

@Component({
  selector: 'app-edit-tipo-documento',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule,FormsModule],
  templateUrl: './edit-tipo-documento.component.html',
  styleUrl: './edit-tipo-documento.component.css'
})
export class EditTipoDocumentoComponent {
  constructor(private router:Router, private tipoDocumentoService:TipoDocumentoService){}

  regTipoDocumento = new TipoDocumento();

  ngOnInit():void{
    this.editar();
  }

  editar(){
    let id=JSON.parse(localStorage.getItem('idTipoDocumento') as string);
    this.tipoDocumentoService.getTipoDocumentoId(id).subscribe(data=>{
      this.regTipoDocumento=data;
    });
  }

  actualizar(tipoDocumento:TipoDocumento){
    this.tipoDocumentoService.updateTipoDocumento(tipoDocumento).subscribe(data=>{
      this.regTipoDocumento=data;
      this.router.navigate(['tipoDocumentos']);
    })
  }
}
