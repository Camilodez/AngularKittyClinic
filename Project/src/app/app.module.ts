import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Footer/footer.component';
import { LoginComponent } from './Login/login.component';
import { ModificarGatoComponent } from './Mascota/modificar-gato/modificar-gato.component';
import { GatoComponent } from './Mascota/gato/gato.component';
import { CrearGatoComponent } from './Mascota/crear-gato/crear-gato.component';
import { InfoComponent } from './Mascota/info/info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './Landing/landing.component';
import { HeaderComponent } from './Header/header.component';
import { HttpClientModule } from '@angular/common/http';

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
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
