import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { UsuarioDTO } from '../_model/UsuarioDTO';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'http://localhost:8080/api/usuarios';

  constructor(private http:HttpClient) { }

  refresh  = new Subject<UsuarioDTO[]>();

  getUsuarios(){
    return this.http.get<UsuarioDTO[]>(this.url);
  }

  createUsuario(usuario: UsuarioDTO){
    return this.http.post<UsuarioDTO>(this.url,usuario);
  }

  getUsuarioId(id:number){
    return this.http.get<UsuarioDTO>(this.url+"/"+id);
  }

  updateUsuario(usuario:UsuarioDTO){
    return this.http.put<UsuarioDTO>(this.url,usuario);
  }

  deleteUsuario(id:number){
    return this.http.delete(this.url+"/"+id);
  }

  buscarPorUsuario(usuario: string){
    return this.http.get<UsuarioDTO>(this.url+"/buscarusuario/"+usuario);
  }
}
