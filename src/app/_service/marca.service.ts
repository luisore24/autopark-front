import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MarcaDTO } from '../_model/MarcaDTO';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  url = 'http://localhost:8080/api/marcas';

  constructor(private http:HttpClient) { }

  refresh  = new Subject<MarcaDTO[]>();

  getMarcas(){
    return this.http.get<MarcaDTO[]>(this.url);
  }

  createMarca(marca: MarcaDTO){
    return this.http.post<MarcaDTO>(this.url,marca);
  }

  getMarcaId(id:number){
    return this.http.get<MarcaDTO>(this.url+"/"+id);
  }

  updateMarca(marca:MarcaDTO){
    return this.http.put<MarcaDTO>(this.url,marca);
  }

  deleteMarca(id:number){
    return this.http.delete(this.url+"/"+id);
  }
}
