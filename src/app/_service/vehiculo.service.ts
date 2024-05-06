import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VehiculoDTO } from '../_model/VehiculoDTO';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  url = 'http://localhost:8080/api/vehiculos';

  constructor(private http:HttpClient) { }

  refresh  = new Subject<VehiculoDTO[]>();

  getVehiculos(){
    return this.http.get<VehiculoDTO[]>(this.url);
  }

  createVehiculo(vehiculo: VehiculoDTO){
    return this.http.post<VehiculoDTO>(this.url,vehiculo);
  }

  getVehiculoId(id:number){
    return this.http.get<VehiculoDTO>(this.url+"/"+id);
  }

  updateVehiculo(vehiculo:VehiculoDTO){
    return this.http.put<VehiculoDTO>(this.url,vehiculo);
  }

  deleteVehiculo(id:number){
    return this.http.delete<VehiculoDTO>(this.url+"/"+id);
  }

}
