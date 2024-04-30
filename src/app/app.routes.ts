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

export const routes: Routes = [
    {path:'vehiculos', component:ListarVehiculoComponent},
    {path:'nuevoVehiculo', component:AddVehiculoComponent},
    {path:'editarVehiculo',component:EditVehiculoComponent},
    {path:'clientes', component:ListarClienteComponent},
    {path:'nuevoCliente', component:AddClienteComponent},
    {path:'editarCliente',component:EditClienteComponent},
    {path:'tipoVehiculos', component:ListarTipoVehiculoComponent},
    {path:'nuevoTipoVehiculo', component:AddTipoVehiculoComponent},
    {path:'editarTipoVehiculo',component:EditTipoVehiculoComponent}
];
