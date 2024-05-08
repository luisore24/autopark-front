import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClienteDTO } from '../_model/ClienteDTO';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url = 'http://localhost:8080/api/clientes';

  constructor(private http:HttpClient) { }

  refresh  = new Subject<ClienteDTO[]>();

  getClientes(){
    return this.http.get<ClienteDTO[]>(this.url);
  }

  createCliente(cliente: ClienteDTO){
    return this.http.post<ClienteDTO>(this.url,cliente);
  }

  getClienteId(id:number){
    return this.http.get<ClienteDTO>(this.url+"/"+id);
  }

  updateCliente(cliente:ClienteDTO){
    return this.http.put<ClienteDTO>(this.url,cliente);
  }

  deleteCliente(id:number){
    return this.http.delete(this.url+"/"+id);
  }
  buscarCliente(documento : string){
    return this.http.get<ClienteDTO>(this.url + "/buscar/"+documento);
  }
}
