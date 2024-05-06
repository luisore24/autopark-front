import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estacionamiento } from '../modelos/Estacionamiento';

@Injectable({
  providedIn: 'root'
})
export class EstacionamientoService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:8080/api/estacionamientos';

  getEstacionamientos(){
    return this.http.get<Estacionamiento[]>(this.url);
  }

  createEstacionamiento(estacionamiento: Estacionamiento){
    return this.http.post<Estacionamiento>(this.url,estacionamiento);
  }

  getEstacionamientoId(idEstacionamiento:number){
    return this.http.get<Estacionamiento>(this.url+"/"+idEstacionamiento);
  }

  updateEstacionamiento(estacionamiento:Estacionamiento){
    return this.http.put<Estacionamiento>(this.url,estacionamiento);
  }

  deleteEstacionamiento(estacionamiento:Estacionamiento){
    return this.http.delete<Estacionamiento>(this.url+"/"+estacionamiento.idEstacionamiento);
  }
}
