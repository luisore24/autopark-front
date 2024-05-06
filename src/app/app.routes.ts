import { Routes } from '@angular/router';
import { ListarVehiculoComponent } from './componentes/vehiculo/listar-vehiculo/listar-vehiculo.component';
import { AddVehiculoComponent } from './componentes/vehiculo/add-vehiculo/add-vehiculo.component';
import { EditVehiculoComponent } from './componentes/vehiculo/edit-vehiculo/edit-vehiculo.component';
import { ListarClienteComponent } from './componentes/cliente/listar-cliente/listar-cliente.component';
import { AddClienteComponent } from './componentes/cliente/add-cliente/add-cliente.component';
import { EditClienteComponent } from './componentes/cliente/edit-cliente/edit-cliente.component';
import { ListarTipoVehiculoComponent } from './componentes/tipoVehiculo/listar-tipo-vehiculo/listar-tipo-vehiculo.component';
import { AddTipoVehiculoComponent } from './componentes/tipoVehiculo/add-tipo-vehiculo/add-tipo-vehiculo.component';
import { EditTipoVehiculoComponent } from './componentes/tipoVehiculo/edit-tipo-vehiculo/edit-tipo-vehiculo.component';
import { EditMarcaComponent } from './componentes/marca/edit-marca/edit-marca.component';
import { ListarMarcaComponent } from './componentes/marca/listar-marca/listar-marca.component';
import { AddMarcaComponent } from './componentes/marca/add-marca/add-marca.component';
import { ListarTipoDocumentoComponent } from './componentes/tipoDocumento/listar-tipo-documento/listar-tipo-documento.component';
import { AddTipoDocumentoComponent } from './componentes/tipoDocumento/add-tipo-documento/add-tipo-documento.component';
import { EditTipoDocumentoComponent } from './componentes/tipoDocumento/edit-tipo-documento/edit-tipo-documento.component';
import { ListarEstacionamientoComponent } from './componentes/estacionamiento/listar-estacionamiento/listar-estacionamiento.component';
import { AddEstacionamientoComponent } from './componentes/estacionamiento/add-estacionamiento/add-estacionamiento.component';
import { EditEstacionamientoComponent } from './componentes/estacionamiento/edit-estacionamiento/edit-estacionamiento.component';
import { ListarRolComponent } from './componentes/rol/listar-rol/listar-rol.component';
import { AddRolComponent } from './componentes/rol/add-rol/add-rol.component';
import { EditRolComponent } from './componentes/rol/edit-rol/edit-rol.component';
import { ListarEmpleadoComponent } from './componentes/empleado/listar-empleado/listar-empleado.component';
import { AddEmpleadoComponent } from './componentes/empleado/add-empleado/add-empleado.component';
import { EditEmpleadoComponent } from './componentes/empleado/edit-empleado/edit-empleado.component';

export const routes: Routes = [
    {path:'vehiculos', component:ListarVehiculoComponent},
    {path:'nuevoVehiculo', component:AddVehiculoComponent},
    {path:'editarVehiculo',component:EditVehiculoComponent},
    {path:'clientes', component:ListarClienteComponent},
    {path:'nuevoCliente', component:AddClienteComponent},
    {path:'editarCliente',component:EditClienteComponent},
    {path:'tipoVehiculos', component:ListarTipoVehiculoComponent},
    {path:'nuevoTipoVehiculo', component:AddTipoVehiculoComponent},
    {path:'editarTipoVehiculo',component:EditTipoVehiculoComponent},
    {path:'marcas', component:ListarMarcaComponent},
    {path:'nuevoMarca', component:AddMarcaComponent},
    {path:'editarMarca',component:EditMarcaComponent},
    {path:'tipoDocumentos', component:ListarTipoDocumentoComponent},
    {path:'nuevoTipoDocumento', component:AddTipoDocumentoComponent},
    {path:'editarTipoDocumento',component:EditTipoDocumentoComponent},
    {path:'estacionamientos', component:ListarEstacionamientoComponent},
    {path:'nuevoEstacionamiento', component:AddEstacionamientoComponent},
    {path:'editarEstacionamiento',component:EditEstacionamientoComponent},
    {path:'roles', component:ListarRolComponent},
    {path:'nuevoRol', component:AddRolComponent},
    {path:'editarRol',component:EditRolComponent},
    {path:'empleados', component:ListarEmpleadoComponent},
    {path:'nuevoEmpleado', component:AddEmpleadoComponent},
    {path:'editarEmpleado',component:EditEmpleadoComponent}

];
