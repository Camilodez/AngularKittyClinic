import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaGatosComponent } from './Mascotas/lista-gatos/lista-gatos.component';
import { PaginaPrincipalComponent } from './Landing/pagina-principal/pagina-principal.component';
import { RouteConfigLoadStart } from '@angular/router';
import { InfoComponent } from './Mascotas/info/info.component';
import { ModificarGatoComponent } from './Mascotas/modificar-gato/modificar-gato.component';
import { CrearGatoComponent } from './Mascotas/crear-gato/crear-gato.component';

const routes: Routes = [
  {path: 'mascotas', component: ListaGatosComponent},
  {path: 'info/:id', component: InfoComponent },
  {path: 'home', component: PaginaPrincipalComponent},
  {path: 'modificar-gato/:id', component: ModificarGatoComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'crear-gato', component: CrearGatoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
