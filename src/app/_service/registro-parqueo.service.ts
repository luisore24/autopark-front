import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RegistroParqueoDTO } from '../_model/RegistroParqueoDTO';


@Injectable({
  providedIn: 'root'
})
export class RegistroParqueoService {

  url = 'http://localhost:8080/api/registroparqueos';

  constructor(private http:HttpClient) { }

  refresh  = new Subject<RegistroParqueoDTO[]>();

  getRegistroParqueos(){
    return this.http.get<RegistroParqueoDTO[]>(this.url);
  }

  createRegistroParqueo(registro: RegistroParqueoDTO){
    return this.http.post<RegistroParqueoDTO>(this.url+"/ingreso",registro);
  }

  salidaRegistroParqueo(registro: RegistroParqueoDTO){
    return this.http.put<RegistroParqueoDTO>(this.url+"/salida",registro);
  }

  getRegistroParqueoId(id:number){
    return this.http.get<RegistroParqueoDTO>(this.url+"/"+id);
  }

  updateRegistroParqueo(registro:RegistroParqueoDTO){
    return this.http.put<RegistroParqueoDTO>(this.url,registro);
  }

  deleteRegistroParqueo(id:number){
    return this.http.delete<RegistroParqueoDTO>(this.url+"/"+id);
  }
}
