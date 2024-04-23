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
import { ListaVeterinarioComponent } from './Admin/lista-veterinario/lista-veterinario.component'; 
import { ModificarVeterinarioComponent } from './Admin/modificar-veterinario/modificar-veterinario.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';

const routes: Routes = [
  {path: 'mascotas', component: ListaGatosComponent},
  {path: 'info/:id', component: InfoComponent },
  {path: 'home', component: PaginaPrincipalComponent},
  {path: 'modificar-gato/:id', component: ModificarGatoComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'crear-gato', component: CrearGatoComponent},
  {path: 'lista-usuarios', component: ListaUsuarioComponent},
  {path: 'perfil-usuario/:id', component: PerfilUsuarioComponent},
  {path: 'modificar-usuario', component: ModificarUsuarioComponent },
  {path: 'modificar-usuario/:id', component: ModificarUsuarioComponent },
  {path: 'veterinarios', component: ListaVeterinarioComponent },
  {path: 'dashboard', component: DashboardComponent },
  {path: 'modificar-veterinario/:id', component: ModificarVeterinarioComponent },
  {path: 'modificar-veterinario', component: ModificarVeterinarioComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
