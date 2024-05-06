import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../modelos/Empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:8080/api/empleados';

  getEmpleados(){
    return this.http.get<Empleado[]>(this.url);
  }

  createEmpleado(empleado: Empleado){
    return this.http.post<Empleado>(this.url,empleado);
  }

  getEmpleadoId(idEmpleado:number){
    return this.http.get<Empleado>(this.url+"/"+idEmpleado);
  }

  updateEmpleado(empleado:Empleado){
    return this.http.put<Empleado>(this.url,empleado);
  }

  deleteEmpleado(empleado:Empleado){
    return this.http.delete<Empleado>(this.url+"/"+empleado.idEmpleado);
  }
}
