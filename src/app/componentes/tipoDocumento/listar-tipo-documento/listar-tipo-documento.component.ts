import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { TipoDocumento } from '../../../modelos/TipoDocumento';
import { TipoDocumentoService } from '../../../servicio/tipo-documento.service';

@Component({
  selector: 'app-listar-tipo-documento',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './listar-tipo-documento.component.html',
  styleUrl: './listar-tipo-documento.component.css'
})
export class ListarTipoDocumentoComponent implements OnInit  {
  tipoDocumentos?:TipoDocumento[];

  constructor(private tipoDocumentoService:TipoDocumentoService, private router:Router){ }

  ngOnInit(): void {
    this.tipoDocumentoService.getTipoDocumentos().subscribe(
      data=>{
        this.tipoDocumentos=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    );
  }

  nuevo():void{
    this.router.navigate(['nuevoTipoDocumento']);
  }
  editar(tipoDocumento:TipoDocumento):void{
    localStorage.setItem("idTipoDocumento",tipoDocumento.idTipoDocumento.toString());
    this.router.navigate(['editarTipoDocumento']);
  }
  eliminar(tipoDocumento:TipoDocumento):void{
    this.tipoDocumentoService.deleteTipoDocumento(tipoDocumento).subscribe(data=>{
      this.tipoDocumentos=this.tipoDocumentos!.filter(c=>c!==tipoDocumento)
    });
  }
}
