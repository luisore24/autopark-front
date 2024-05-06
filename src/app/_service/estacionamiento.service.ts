import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { EstacionamientoDTO } from '../_model/EstacionamientoDTO';

@Injectable({
  providedIn: 'root'
})
export class EstacionamientoService {

  url = 'http://localhost:8080/api/estacionamientos';

  constructor(private http:HttpClient) { }

  refresh  = new Subject<EstacionamientoDTO[]>();

  getEstacionamientos(){
    return this.http.get<EstacionamientoDTO[]>(this.url);
  }

  createEstacionamiento(estacionamiento: EstacionamientoDTO){
    return this.http.post<EstacionamientoDTO>(this.url,estacionamiento);
  }

  getEstacionamientoId(id:number){
    return this.http.get<EstacionamientoDTO>(this.url+"/"+id);
  }

  updateEstacionamiento(estacionamiento:EstacionamientoDTO){
    return this.http.put<EstacionamientoDTO>(this.url,estacionamiento);
  }

  deleteEstacionamiento(id:number){
    return this.http.delete(this.url+"/"+id);
  }
}
