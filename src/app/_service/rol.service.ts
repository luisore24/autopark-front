import { Injectable } from '@angular/core';
import { RolDTO } from '../_model/RolDTO';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  url = 'http://localhost:8080/api/roles';

  constructor(private http:HttpClient) { }

  refresh  = new Subject<RolDTO[]>();

  getRoles(){
    return this.http.get<RolDTO[]>(this.url);
  }

  createRol(rol: RolDTO){
    return this.http.post<RolDTO>(this.url,rol);
  }

  getRolId(id:number){
    return this.http.get<RolDTO>(this.url+"/"+id);
  }

  updateRol(rol:RolDTO){
    return this.http.put<RolDTO>(this.url,rol);
  }

  deleteRol(id:number){
    return this.http.delete(this.url+"/"+id);
  }

}
