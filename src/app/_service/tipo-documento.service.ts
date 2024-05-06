import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoDocumento } from '../_model/TipoDocumento';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {
  url = 'http://localhost:8080/api/tipodocumentos';

  constructor(private http:HttpClient) { }

  refresh  = new Subject<TipoDocumento[]>();

  getTipoDocumentos(){
    return this.http.get<TipoDocumento[]>(this.url);
  }

  createTipoDocumento(TipoDocumento: TipoDocumento){
    return this.http.post<TipoDocumento>(this.url,TipoDocumento);
  }

  getTipoDocumentoId(id:number){
    return this.http.get<TipoDocumento>(this.url+"/"+id);
  }

  updateTipoDocumento(TipoDocumento:TipoDocumento){
    return this.http.put<TipoDocumento>(this.url,TipoDocumento);
  }

  deleteTipoDocumento(TipoDocumento:TipoDocumento){
    return this.http.delete<TipoDocumento>(this.url+"/"+TipoDocumento.idTipoDocumento);
  }
}
