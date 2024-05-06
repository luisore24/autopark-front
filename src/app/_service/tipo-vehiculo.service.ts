import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoVehiculoDTO } from '../_model/TipoVehiculoDTO';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoVehiculoService {

  url = 'http://localhost:8080/api/tipoVehiculos';

  constructor(private http:HttpClient) { }

  refresh  = new Subject<TipoVehiculoDTO[]>();

  getTipoVehiculos(){
    return this.http.get<TipoVehiculoDTO[]>(this.url);
  }

  createTipoVehiculo(tipoVehiculo: TipoVehiculoDTO){
    return this.http.post<TipoVehiculoDTO>(this.url,tipoVehiculo);
  }

  getTipoVehiculoId(id:number){
    return this.http.get<TipoVehiculoDTO>(this.url+"/"+id);
  }

  updateTipoVehiculo(tipoVehiculo:TipoVehiculoDTO){
    return this.http.put<TipoVehiculoDTO>(this.url,tipoVehiculo);
  }

  deleteTipoVehiculo(id:number){
    return this.http.delete(this.url+"/"+id);
  }
}
