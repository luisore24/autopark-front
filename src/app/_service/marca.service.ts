import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Marca } from '../_model/Marca';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  url = 'http://localhost:8080/api/marcas';

  constructor(private http:HttpClient) { }

  refresh  = new Subject<Marca[]>();

  getMarcas(){
    return this.http.get<Marca[]>(this.url);
  }

  createMarca(marca: Marca){
    return this.http.post<Marca>(this.url,marca);
  }

  getMarcaId(id:number){
    return this.http.get<Marca>(this.url+"/"+id);
  }

  updateMarca(marca:Marca){
    return this.http.put<Marca>(this.url,marca);
  }

  deleteMarca(marca:Marca){
    return this.http.delete<Marca>(this.url+"/"+marca.id);
  }
}
