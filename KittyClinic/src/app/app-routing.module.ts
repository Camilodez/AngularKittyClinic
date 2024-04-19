import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaGatosComponent } from './Mascotas/lista-gatos/lista-gatos.component';
import { PaginaPrincipalComponent } from './Landing/pagina-principal/pagina-principal.component';
import { RouteConfigLoadStart } from '@angular/router';
import { InfoComponent } from './Mascotas/info/info.component';

const routes: Routes = [
  {path: 'mascotas', component: ListaGatosComponent},
  { path: 'info/:id', component: InfoComponent },
  {path: 'home', component: PaginaPrincipalComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
