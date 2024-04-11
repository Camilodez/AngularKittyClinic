import { NgModule } from '@angular/core';
import { RouteConfigLoadStart, RouterModule, Routes } from '@angular/router';
import { CrearGatoComponent } from './Mascota/crear-gato/crear-gato.component';
import { ModificarGatoComponent } from './Mascota/modificar-gato/modificar-gato.component';
import { LandingComponent } from './Landing/landing.component';
import { LoginComponent } from './Login/login.component';
import { GatoComponent } from './Mascota/gato/gato.component';
import { InfoComponent } from './Mascota/info/info.component';

const routes: Routes = [
  { path: 'home', component: LandingComponent },
  { path: 'mascotas', component: GatoComponent },
  { path: 'crear-gato', component: CrearGatoComponent },
  { path: 'modificar-gato/:id', component: ModificarGatoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'info/:id', component: InfoComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
