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
import { InfoComponent } from './Mascotas/info/info.component';
import { CrearGatoComponent } from './Mascotas/crear-gato/crear-gato.component';
import { ListaUsuarioComponent } from './Usuario/lista-usuario/lista-usuario.component';
import { PerfilUsuarioComponent } from './Usuario/perfil-usuario/perfil-usuario.component';
import { ModificarUsuarioComponent } from './Usuario/modificar-usuario/modificar-usuario.component';
import { ListaVeterinarioComponent } from './Admin/lista-veterinario/lista-veterinario.component';
import { ModificarVeterinarioComponent } from './Admin/modificar-veterinario/modificar-veterinario.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { LoginVeterinarioComponent } from './Landing/login-veterinario/login-veterinario.component';

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
    ModificarGatoComponent,
    InfoComponent,
    CrearGatoComponent,
    ListaUsuarioComponent,
    PerfilUsuarioComponent,
    ModificarUsuarioComponent,
    ListaVeterinarioComponent,
    ModificarVeterinarioComponent,
    DashboardComponent,
    LoginuserComponent,
    LoginVeterinarioComponent
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
