import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoDocumentoDTO } from '../_model/TipoDocumentoDTO';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {
  url = 'http://localhost:8080/api/tipodocumentos';

  constructor(private http:HttpClient) { }

  refresh  = new Subject<TipoDocumentoDTO[]>();

  getTipoDocumentos(){
    return this.http.get<TipoDocumentoDTO[]>(this.url);
  }

  createTipoDocumento(TipoDocumento: TipoDocumentoDTO){
    return this.http.post<TipoDocumentoDTO>(this.url,TipoDocumento);
  }

  getTipoDocumentoId(id:number){
    return this.http.get<TipoDocumentoDTO>(this.url+"/"+id);
  }

  updateTipoDocumento(TipoDocumento:TipoDocumentoDTO){
    return this.http.put<TipoDocumentoDTO>(this.url,TipoDocumento);
  }

  deleteTipoDocumento(id:number){
    return this.http.delete(this.url+"/"+id);
  }
}
