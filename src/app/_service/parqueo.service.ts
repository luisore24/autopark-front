import { Injectable } from '@angular/core';
import { ParqueoDTO } from '../_model/ParqueoDTO';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParqueoService {

  url = 'http://localhost:8080/api/parqueos';

  constructor(private http:HttpClient) { }

  refresh  = new Subject<ParqueoDTO[]>();

  getParqueos(){
    return this.http.get<ParqueoDTO[]>(this.url);
  }

  createParqueo(registro: ParqueoDTO){
    return this.http.post<ParqueoDTO>(this.url,registro);
  }

  getParqueoId(id:number){
    return this.http.get<ParqueoDTO>(this.url+"/"+id);
  }

  updateParqueo(registro:ParqueoDTO){
    return this.http.put<ParqueoDTO>(this.url,registro);
  }

  deleteParqueo(id:number){
    return this.http.delete<ParqueoDTO>(this.url+"/"+id);
  }
}
