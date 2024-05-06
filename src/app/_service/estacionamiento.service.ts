import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Estacionamiento } from '../_model/Estacionamiento';

@Injectable({
  providedIn: 'root'
})
export class EstacionamientoService {

  url = 'http://localhost:8080/api/estacionamientos';

  constructor(private http:HttpClient) { }

  refresh  = new Subject<Estacionamiento[]>();

  getEstacionamientos(){
    return this.http.get<Estacionamiento[]>(this.url);
  }

  createEstacionamiento(estacionamiento: Estacionamiento){
    return this.http.post<Estacionamiento>(this.url,estacionamiento);
  }

  getEstacionamientoId(id:number){
    return this.http.get<Estacionamiento>(this.url+"/"+id);
  }

  updateEstacionamiento(estacionamiento:Estacionamiento){
    return this.http.put<Estacionamiento>(this.url,estacionamiento);
  }

  deleteEstacionamiento(estacionamiento:Estacionamiento){
    return this.http.delete<Estacionamiento>(this.url+"/"+estacionamiento.idEstacionamiento);
  }
}
