import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaGatosComponent } from './Mascotas/lista-gatos/lista-gatos.component';
import { PaginaPrincipalComponent } from './Landing/pagina-principal/pagina-principal.component';
import { RouteConfigLoadStart } from '@angular/router';
import { InfoComponent } from './Mascotas/info/info.component';
import { CrearGatoComponent } from './Mascotas/crear-gato/crear-gato.component';
import { ListaUsuarioComponent } from './Usuario/lista-usuario/lista-usuario.component';
import { PerfilUsuarioComponent } from './Usuario/perfil-usuario/perfil-usuario.component';
import { ModificarGatoComponent } from './Mascotas/modificar-gato/modificar-gato.component';
import { ModificarUsuarioComponent } from './Usuario/modificar-usuario/modificar-usuario.component';
import { ListaVeterinarioComponent } from './Veterinario/lista-veterinario/lista-veterinario.component'; 
import { ModificarVeterinarioComponent } from './Veterinario/modificar-veterinario/modificar-veterinario.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { LoginComponent } from './Usuario/login/login.component';
import { LoginuserComponent } from './Usuario/loginuser/loginuser.component';
import { LoginVeterinarioComponent } from './Veterinario/login-veterinario/login-veterinario.component';
import { CrearTratamientoComponent } from './Mascotas/crear-tratamiento/crear-tratamiento.component';
import { VerTratamientosComponent } from './Mascotas/ver-tratamientos/ver-tratamientos.component';
import { LoginAdminComponent } from './Admin/login-admin/login-admin.component';
import { ComunicacionComponent } from './Landing/comunicacion/comunicacion.component';


const routes: Routes = [
  { path: 'mascotas', component: ListaGatosComponent },
  { path: 'comunicacion', component: ComunicacionComponent },
  { path: 'info/:id', component: InfoComponent },
  { path: 'home', component: PaginaPrincipalComponent },
  { path: 'modificar-gato/:id', component: ModificarGatoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'crear-gato', component: CrearGatoComponent },
  { path: 'lista-usuarios', component: ListaUsuarioComponent },
  { path: 'perfil-usuario/:id', component: PerfilUsuarioComponent },
  { path: 'modificar-usuario', component: ModificarUsuarioComponent },
  { path: 'modificar-usuario/:id', component: ModificarUsuarioComponent },
  { path: 'veterinarios', component: ListaVeterinarioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'loginuser/:id', component: LoginuserComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'modificar-veterinario/:correo', component: ModificarVeterinarioComponent },
  { path: 'modificar-veterinario', component: ModificarVeterinarioComponent },
  { path: 'login-veterinario', component: LoginVeterinarioComponent },
  { path: 'veterinario/crear-tratamiento/:id', component: CrearTratamientoComponent },
  { path: 'ver-tratamientos/veterinario', component: VerTratamientosComponent },
  { path: 'ver-tratamientos/veterinario/:correo', component: VerTratamientosComponent },
  { path: 'admin-access-4f5e9d90-93e0-4c6b-88b1-711454a5b611', component: LoginAdminComponent },
  { path: 'veterinario/home', component: ListaGatosComponent },
  { path: 'cliente/home', component: LoginuserComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
