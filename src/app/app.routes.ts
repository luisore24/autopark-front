import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { TipoDocumentoComponent } from './pages/tipo-documento/tipo-documento.component';
import { VehiculoComponent } from './pages/vehiculo/vehiculo.component';
import { MarcaComponent } from './pages/marca/marca.component';
import { TipoVehiculoComponent } from './pages/tipo-vehiculo/tipo-vehiculo.component';
import { EstacionamientoComponent } from './pages/estacionamiento/estacionamiento.component';
import { guardGuard } from './_auth/guard.guard';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { RolComponent } from './pages/rol/rol.component';
import { TarifarioComponent } from './pages/tarifario/tarifario.component';
import { RegistroParqueoComponent } from './pages/registro-parqueo/registro-parqueo.component';
import { RegistroFacturaComponent } from './pages/registro-factura/registro-factura.component';


export const routes: Routes = [

    { path : '', redirectTo : 'login' , pathMatch : 'full' },
    { path : 'login', component : LoginComponent },
    { path : 'cliente', component : ClienteComponent , canActivate: [guardGuard]},
    { path : 'tipodocumento', component : TipoDocumentoComponent , canActivate: [guardGuard]},
    { path : 'vehiculo', component : VehiculoComponent , canActivate: [guardGuard]},
    { path : 'marca', component : MarcaComponent , canActivate: [guardGuard]},
    { path : 'tipovehiculo', component : TipoVehiculoComponent , canActivate: [guardGuard]},
    { path : 'estacionamiento', component : EstacionamientoComponent , canActivate: [guardGuard]},
    { path : 'usuario', component : UsuarioComponent , canActivate: [guardGuard]},
    { path : 'rol', component : RolComponent , canActivate: [guardGuard]},
    { path : 'tipodocumento', component : TipoDocumentoComponent , canActivate: [guardGuard]},
    { path : 'tarifario', component : TarifarioComponent , canActivate: [guardGuard]},
    { path : 'parqueos', component : RegistroParqueoComponent, canActivate: [guardGuard]},
    { path : 'registros', component : RegistroFacturaComponent, canActivate: [guardGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }