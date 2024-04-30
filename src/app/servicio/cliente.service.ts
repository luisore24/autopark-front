import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../modelos/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:8080/api/clientes';

  getClientes(){
    return this.http.get<Cliente[]>(this.url);
  }

  createCliente(cliente: Cliente){
    return this.http.post<Cliente>(this.url,cliente);
  }

  getClienteId(id:number){
    return this.http.get<Cliente>(this.url+"/"+id);
  }

  updateCliente(cliente:Cliente){
    return this.http.put<Cliente>(this.url,cliente);
  }

  deleteCliente(cliente:Cliente){
    return this.http.delete<Cliente>(this.url+"/"+cliente.id);
  }
}
