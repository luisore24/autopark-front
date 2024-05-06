import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../_model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url = 'http://localhost:8080/api/clientes';

  constructor(private http:HttpClient) { }
  

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
