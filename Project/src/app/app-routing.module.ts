import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearGatoComponent } from './crear-gato/crear-gato.component';
import { ModificarGatoComponent } from './modificar-gato/modificar-gato.component';
import { GatoComponent } from './gato/gato.component';

const routes: Routes = [
  { path: 'mascotas', component: CrearGatoComponent },
  { path: 'mascotas/:id', component: ModificarGatoComponent },
  { path: 'crear-mascota', component: GatoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
