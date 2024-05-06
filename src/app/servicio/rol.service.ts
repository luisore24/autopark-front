import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rol } from '../modelos/Rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:8080/api/roles';

  getRoles(){
    return this.http.get<Rol[]>(this.url);
  }

  createRol(rol: Rol){
    return this.http.post<Rol>(this.url,rol);
  }

  getRolId(idRol:number){
    return this.http.get<Rol>(this.url+"/"+idRol);
  }

  updateRol(rol:Rol){
    return this.http.put<Rol>(this.url,rol);
  }

  deleteRol(rol:Rol){
    return this.http.delete<Rol>(this.url+"/"+rol.idRol);
  }
}
