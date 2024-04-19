import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './Landing/pagina-principal/pagina-principal.component';
import { LaboratoriosComponent } from './Landing/laboratorios/laboratorios.component';
import { CirugiasComponent } from './Landing/cirugias/cirugias.component';
import { ListaGatosComponent } from './Mascotas/lista-gatos/lista-gatos.component';
import { LoginComponent } from './Landing/login/login.component';
import { HeaderComponent } from './Landing/header/header.component';
import { FooterComponent } from './Landing/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ModificarGatoComponent } from './Mascotas/modificar-gato/modificar-gato.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    LaboratoriosComponent,
    CirugiasComponent,
    ListaGatosComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ModificarGatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
