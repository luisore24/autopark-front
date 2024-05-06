import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoDocumento } from '../modelos/TipoDocumento';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:8080/api/tipoDocumentos';

  getTipoDocumentos(){
    return this.http.get<TipoDocumento[]>(this.url);
  }

  createTipoDocumento(tipoDocumento: TipoDocumento){
    return this.http.post<TipoDocumento>(this.url,tipoDocumento);
  }

  getTipoDocumentoId(idTipoDocumento:number){
    return this.http.get<TipoDocumento>(this.url+"/"+idTipoDocumento);
  }

  updateTipoDocumento(tipoDocumento:TipoDocumento){
    return this.http.put<TipoDocumento>(this.url,tipoDocumento);
  }

  deleteTipoDocumento(tipoDocumento:TipoDocumento){
    return this.http.delete<TipoDocumento>(this.url+"/"+tipoDocumento.idTipoDocumento);
  }
}