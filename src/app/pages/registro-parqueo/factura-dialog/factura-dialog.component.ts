import { Component, Inject } from '@angular/core';
import { RegistroParqueoDTO } from '../../../_model/RegistroParqueoDTO';
import { RegistroParqueoService } from '../../../_service/registro-parqueo.service';
import { TarifarioService } from '../../../_service/tarifario.service';
import { RegistroParqueoComponent } from '../registro-parqueo.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClienteService } from '../../../_service/cliente.service';
import { ClienteDTO } from '../../../_model/ClienteDTO';
import { ParqueoDetalleDTO } from '../../../_model/ParqueoDetalleDTO';
import { ParqueoDTO } from '../../../_model/ParqueoDTO';
import { VehiculoDTO } from '../../../_model/VehiculoDTO';
import { TarifarioDTO } from '../../../_model/TarifarioDTO';
import moment from 'moment';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import { UsuarioService } from '../../../_service/usuario.service';
import { UsuarioDTO } from '../../../_model/UsuarioDTO';
import { TipoDocumentoService } from '../../../_service/tipo-documento.service';
import { TipoDocumentoDTO } from '../../../_model/TipoDocumentoDTO';
import {CommonModule} from '@angular/common';
import { ParqueoService } from '../../../_service/parqueo.service';


@Component({
  selector: 'app-factura-dialog',
  standalone: true,
  imports: [CommonModule,MatDividerModule,MatDialogModule,FormsModule,MatSelectModule,MatButtonModule,MatInputModule,MatCardModule,MatFormFieldModule],
  templateUrl: './factura-dialog.component.html',
  styleUrl: './factura-dialog.component.css'
})
export class FacturaDialogComponent {

  registro! : RegistroParqueoDTO;
  cliente! : ClienteDTO;
  detalle! : ParqueoDetalleDTO;
  parqueoDetalle : ParqueoDetalleDTO[] = [];
  factura! : ParqueoDTO;

  tarifa! : TarifarioDTO;
  precio! : number;

  usuario! : UsuarioDTO;

  tDocumento! : TipoDocumentoDTO[];

  

  constructor(private registroService : RegistroParqueoService,
    private tarifaServie : TarifarioService,
    private clienteSevice : ClienteService,
    private usuarioService: UsuarioService,
    private tdocumentoService : TipoDocumentoService,
    private parqueoServicio : ParqueoService,
  public dialogRef : MatDialogRef<RegistroParqueoComponent>,
  @Inject(MAT_DIALOG_DATA) public data : RegistroParqueoDTO) { }

  ngOnInit(): void {
    this.getTipoDocumento();
    this.cliente = new ClienteDTO();
    this.registro  = this.data;
    this.detalle = new ParqueoDetalleDTO;

    
    this.tarifaServie.buscarTarifa(this.registro.vehiculoDTO.tipoVehiculoDTO.id).subscribe(data =>{
      this.detalle.vehiculoDTO = this.registro.vehiculoDTO;
      this.detalle.horaingreso = this.registro.horaFechaIngreso; 
      this.detalle.horasalida = this.registro.horaFechaSalida;
      this.detalle.cantidad = this.registro.tiempoParqueo;
      this.detalle.preciovta = data.monto;
      this.detalle.importe = this.detalle.preciovta * this.detalle.cantidad;

      this.parqueoDetalle.push(this.detalle);
    });
    
  }


  aceptar(){
    try{
      let token = JSON.stringify(sessionStorage.getItem('access_token'));
      let claim = JSON.parse(atob(token.split('.')[1]));
      let parqueoDTO = new ParqueoDTO();
      let localISOTime = moment().format('YYYY-MM-DD');
      this.clienteSevice.buscarCliente(this.cliente.dni).subscribe((data) => {
        if(data){
          parqueoDTO.fechaParqueo=localISOTime;
          parqueoDTO.clienteDTO=data;      
          parqueoDTO.parqueoDetalleDTO = this.parqueoDetalle;
          
          this.usuarioService.buscarPorUsuario(claim.sub).subscribe(data =>{
            parqueoDTO.usuarioDTO = data;
          });
          //parqueoDTO.usuarioDTO = this.getUserLogged();
         
          this.parqueoServicio.createParqueo(parqueoDTO).subscribe(data =>{
  
          });
        }
        else{
          this.clienteSevice.createCliente(this.cliente).subscribe(data =>{
            parqueoDTO.fechaParqueo=localISOTime;
            parqueoDTO.clienteDTO=data;
            parqueoDTO.parqueoDetalleDTO = this.parqueoDetalle;
            this.usuarioService.buscarPorUsuario(claim.sub).subscribe(data =>{
              parqueoDTO.usuarioDTO = data;
            });
            this.parqueoServicio.createParqueo(parqueoDTO).subscribe(data=>{

            });
          })
        }
      });

    }
    catch(error){
      console.log(error);
    }

    this.dialogRef.close();
  }

  cancel(){
    this.dialogRef.close();
  }
  

  /* getUserLogged(){
    
    
    this.usuarioService.buscarPorUsuario(claim.sub).subscribe(data =>{
      this.usuario = data;
    });
    return this.usuario;
  } */

  getTipoDocumento(){
    this.tdocumentoService.getTipoDocumentos().subscribe(data => {
      this.tDocumento = data;
    });
  }

  compareTipoDocumento(obj1: TipoDocumentoDTO, obj2: TipoDocumentoDTO) {
    return obj1 && obj2 ? obj1.idTipoDocumento === obj2.idTipoDocumento : obj1 === obj2;
}

}
