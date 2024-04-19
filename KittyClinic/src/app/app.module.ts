import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './Landing/pagina-principal/pagina-principal.component';
import { LaboratoriosComponent } from './Landing/laboratorios/laboratorios.component';
import { CirugiasComponent } from './Landing/cirugias/cirugias.component';
import { ListaGatosComponent } from './Mascotas/lista-gatos/lista-gatos.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    LaboratoriosComponent,
    CirugiasComponent,
    ListaGatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
