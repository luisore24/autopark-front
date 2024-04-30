import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoVehiculo } from '../modelos/TipoVehiculo';

@Injectable({
  providedIn: 'root'
})
export class TipoVehiculoService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:8080/api/tipoVehiculos';

  getTipoVehiculos(){
    return this.http.get<TipoVehiculo[]>(this.url);
  }

  createTipoVehiculo(tipoVehiculo: TipoVehiculo){
    return this.http.post<TipoVehiculo>(this.url,tipoVehiculo);
  }

  getTipoVehiculoId(id:number){
    return this.http.get<TipoVehiculo>(this.url+"/"+id);
  }

  updateTipoVehiculo(tipoVehiculo:TipoVehiculo){
    return this.http.put<TipoVehiculo>(this.url,tipoVehiculo);
  }

  deleteTipoVehiculo(tipoVehiculo:TipoVehiculo){
    return this.http.delete<TipoVehiculo>(this.url+"/"+tipoVehiculo.id);
  }
}