import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehiculo } from '../modelos/Vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:8080/api/vehiculos';

  getVehiculos(){
    return this.http.get<Vehiculo[]>(this.url);
  }

  createVehiculo(vehiculo: Vehiculo){
    return this.http.post<Vehiculo>(this.url,vehiculo);
  }

  getVehiculoId(id_vehiculo:number){
    return this.http.get<Vehiculo>(this.url+"/"+id_vehiculo);
  }

  updateVehiculo(vehiculo:Vehiculo){
    return this.http.put<Vehiculo>(this.url,vehiculo);
  }

  deleteVehiculo(vehiculo:Vehiculo){
    return this.http.delete<Vehiculo>(this.url+"/"+vehiculo.id_vehiculo);
  }
}
