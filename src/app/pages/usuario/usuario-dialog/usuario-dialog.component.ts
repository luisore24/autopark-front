import { Component, Inject } from '@angular/core';
import { CommonModule} from '@angular/common'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { UsuarioDTO } from '../../../_model/UsuarioDTO';
import { TipoDocumentoDTO } from '../../../_model/TipoDocumentoDTO';
import { UsuarioService } from '../../../_service/usuario.service';
import { TipoDocumentoService } from '../../../_service/tipo-documento.service';
import { UsuarioComponent } from '../usuario.component';
import { RolService } from '../../../_service/rol.service';
import { RolDTO } from '../../../_model/RolDTO';

@Component({
  selector: 'app-usuario-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule,MatSelectModule,MatButtonModule,MatInputModule,MatCardModule,MatFormFieldModule],
  templateUrl: './usuario-dialog.component.html',
  styleUrl: './usuario-dialog.component.css'
})
export class UsuarioDialogComponent {
  usuario! : UsuarioDTO;
  tDocumento! : TipoDocumentoDTO[];
  roles ! : RolDTO[];


  constructor(private usuarioService : UsuarioService,
  private tdocumentoService : TipoDocumentoService,
  private rolService: RolService,
  public dialogRef : MatDialogRef<UsuarioComponent>,
  @Inject(MAT_DIALOG_DATA) public data : UsuarioDTO) { }

  ngOnInit(): void {
    this.getTipoDocumento();
    this.getRoles()
    this.usuario = new UsuarioDTO();
    this.usuario.idUsuario = this.data.idUsuario;
    this.usuario.name = this.data.name;
    this.usuario.lastname = this.data.lastname;
    this.usuario.tipoDocumentoDTO = this.data.tipoDocumentoDTO;
    this.usuario.nroDocumento = this.data.nroDocumento;
    this.usuario.correo = this.data.correo;
    this.usuario.telefono = this.data.telefono;
    this.usuario.rolDTO = this.data.rolDTO
    this.usuario.username = this.data.username;
    this.usuario.password = this.data.password;
  }

  save(){
    if(this.data != null){
      this.usuarioService.updateUsuario(this.usuario).subscribe(() => {
        this.usuarioService.getUsuarios().subscribe(data =>{
          this.usuarioService.refresh.next(data);

        });
      });
    }
    else{
      this.usuarioService.createUsuario(this.usuario).subscribe(() => {
        this.usuarioService.getUsuarios().subscribe(data =>{
          this.usuarioService.refresh.next(data);
        });
      });
    }
    this.dialogRef.close();
  }

  cancel(){
    this.dialogRef.close();
  }

  getTipoDocumento(){
    this.tdocumentoService.getTipoDocumentos().subscribe(data => {
      console.log(data);
      this.tDocumento = data;
    });
  }

  getRoles(){
    this.rolService.getRoles().subscribe(data => {
      console.log(data);
      this.roles = data;
    });
  }

  compareTipoDocumento(obj1 : TipoDocumentoDTO, obj2 : TipoDocumentoDTO){
    return obj1 === undefined || obj2 === undefined || obj1 === null || obj2 === null ? false : obj1.idTipoDocumento == obj2.idTipoDocumento; 
  }

  compareRoles(obj1 : RolDTO, obj2 : RolDTO){
    return obj1 === undefined || obj2 === undefined || obj1 === null || obj2 === null ? false : obj1.idRol == obj2.idRol; 
  }
}
