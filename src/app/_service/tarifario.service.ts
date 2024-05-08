import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TarifarioDTO } from '../_model/TarifarioDTO';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarifarioService {

  url = 'http://localhost:8080/api/tarifarios';

  constructor(private http:HttpClient) { }

  refresh  = new Subject<TarifarioDTO[]>();

  getTarifarios(){
    return this.http.get<TarifarioDTO[]>(this.url);
  }

  createTarifario(tarifario: TarifarioDTO){
    return this.http.post<TarifarioDTO>(this.url,tarifario);
  }

  getTarifarioId(id:number){
    return this.http.get<TarifarioDTO>(this.url+"/"+id);
  }

  updateTarifario(tarifario:TarifarioDTO){
    return this.http.put<TarifarioDTO>(this.url,tarifario);
  }

  deleteTarifario(id:number){
    return this.http.delete(this.url+"/"+id);
  }

  buscarTarifa( id : number){
    return this.http.get<TarifarioDTO>(this.url+"/buscar/" + id);
  }
  
}
