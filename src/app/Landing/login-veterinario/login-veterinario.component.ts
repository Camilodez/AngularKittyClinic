import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tratamiento } from 'src/app/models/tratamiento.model';
import { Veterinario } from 'src/app/models/veterinario.model';
import { TratamientoService } from 'src/app/services/tratamiento.service';
import { VeterinarioService } from 'src/app/services/veterinario.service';

@Component({
  selector: 'app-login-veterinario',
  templateUrl: './login-veterinario.component.html',
  styleUrls: ['./login-veterinario.component.css']
})
export class LoginVeterinarioComponent {

  mostrarContrasena: boolean = false; // Añade esta línea aquí

  constructor(private veterinarioService: VeterinarioService,private router: Router,private tratamientoService: TratamientoService) { } 

  vet: Veterinario | null = null;

  trat: Tratamiento | null = null;

  toggleMostrarContrasena(): void {
    this.mostrarContrasena = !this.mostrarContrasena;
  }
  
  async loginVet(correo: string, password: string) {
    this.vet = await this.veterinarioService.login(correo, password);
    console.log("Correo actual:", correo); 
    if (this.vet != null) {
        // Verificar si el correo corresponde al administrador
        
        if (correo === "5edfdcc2-37d4-4f94-854c-8e6ced609e23@gmail.com") {
            this.router.navigate(["/dashboard"]);  // Redirecciona a la pantalla de administrador
        } else {
            
            this.trat = (await this.tratamientoService.TratamientosVet(this.vet.id)).data;
            console.log(this.vet);
            console.log("Tratamiento: ", this.trat);
            sessionStorage.setItem("veterinario", JSON.stringify(this.vet));
            this.router.navigate(["/mascotas"]);  // Redirecciona a la pantalla de mascotas
        }
    } else {
        console.log("Credenciales incorrectas");
    }
}

  correo!: string;
  password!: string;

}
