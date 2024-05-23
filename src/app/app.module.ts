import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './Landing/pagina-principal/pagina-principal.component';
import { LaboratoriosComponent } from './Landing/laboratorios/laboratorios.component';
import { CirugiasComponent } from './Landing/cirugias/cirugias.component';
import { ListaGatosComponent } from './Mascotas/lista-gatos/lista-gatos.component';
import { LoginComponent } from './Usuario/login/login.component';
import { HeaderComponent } from './Landing/header/header.component';
import { FooterComponent } from './Landing/footer/footer.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ModificarGatoComponent } from './Mascotas/modificar-gato/modificar-gato.component';
import { FormsModule } from '@angular/forms';
import { InfoComponent } from './Mascotas/info/info.component';
import { CrearGatoComponent } from './Mascotas/crear-gato/crear-gato.component';
import { ListaUsuarioComponent } from './Usuario/lista-usuario/lista-usuario.component';
import { PerfilUsuarioComponent } from './Usuario/perfil-usuario/perfil-usuario.component';
import { ModificarUsuarioComponent } from './Usuario/modificar-usuario/modificar-usuario.component';
import { ListaVeterinarioComponent } from './Veterinario/lista-veterinario/lista-veterinario.component';
import { ModificarVeterinarioComponent } from './Veterinario/modificar-veterinario/modificar-veterinario.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';

import { LoginuserComponent } from './Usuario/loginuser/loginuser.component';
import { LoginVeterinarioComponent } from './Veterinario/login-veterinario/login-veterinario.component';
import { CrearTratamientoComponent } from './Mascotas/crear-tratamiento/crear-tratamiento.component';
import { VerTratamientosComponent } from './Mascotas/ver-tratamientos/ver-tratamientos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginAdminComponent } from './Admin/login-admin/login-admin.component';
import { ComunicacionComponent } from './Landing/comunicacion/comunicacion.component';
import { AuthInterceptor } from './helpers/auth.interceptor';



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
    LoginVeterinarioComponent,
    CrearTratamientoComponent,
    VerTratamientosComponent,
    LoginAdminComponent,
    ComunicacionComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
