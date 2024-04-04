import { NgModule } from '@angular/core';
import { RouteConfigLoadStart, RouterModule, Routes } from '@angular/router';
import { CrearGatoComponent } from './crear-gato/crear-gato.component';
import { ModificarGatoComponent } from './modificar-gato/modificar-gato.component';
import { GatoComponent } from './gato/gato.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'home', component: LandingComponent },
  { path: 'mascotas', component: GatoComponent },
  { path: 'crear-mascota', component: CrearGatoComponent },
  { path: 'modificar-mascota', component: ModificarGatoComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
