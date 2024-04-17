import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ModificarGatoComponent } from './Mascota/modificar-gato/modificar-gato.component';
import { GatoComponent } from './Mascota/gato/gato.component';
import { CrearGatoComponent } from './Mascota/crear-gato/crear-gato.component';
import { InfoComponent } from './Mascota/info/info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { VerMisMascotasComponent } from './Usuario/ver-mis-mascotas/ver-mis-mascotas.component';
import { ListaUsuarioComponent } from './Veterinario/lista-usuario/lista-usuario.component';
import { ActualizarUsuarioComponent } from './Veterinario/actualizar-usuario/actualizar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    LoginComponent,
    ModificarGatoComponent,
    CrearGatoComponent,
    GatoComponent,
    InfoComponent,
    VerMisMascotasComponent,
    VerMisMascotasComponent,
    ActualizarUsuarioComponent,
    ListaUsuarioComponent,
    ActualizarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
