import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehiculo } from '../_model/Vehiculo';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  url = 'http://localhost:8080/api/vehiculos';

  constructor(private http:HttpClient) { }

  refresh  = new Subject<Vehiculo[]>();

  getVehiculos(){
    return this.http.get<Vehiculo[]>(this.url);
  }

  createVehiculo(vehiculo: Vehiculo){
    return this.http.post<Vehiculo>(this.url,vehiculo);
  }

  getVehiculoId(id:number){
    return this.http.get<Vehiculo>(this.url+"/"+id);
  }

  updateVehiculo(vehiculo:Vehiculo){
    return this.http.put<Vehiculo>(this.url,vehiculo);
  }

  deleteVehiculo(vehiculo:Vehiculo){
    return this.http.delete<Vehiculo>(this.url+"/"+vehiculo.id);
  }

}
