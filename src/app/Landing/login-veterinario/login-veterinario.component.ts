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



  formVeterinario: Veterinario = {
    id: 0,
    cedula: 0,
    nombre: '',
    apellido: '',
    correo: '',
    password: '',
    foto: '',
    especialidad: '',
    estado: false
  }

  toggleMostrarContrasena(): void {
    this.mostrarContrasena = !this.mostrarContrasena;
  }
  
 

    login (correo: string, password: string) {

      this.formVeterinario.correo = correo;
      this.formVeterinario.password = password;
      console.log("Correo:" + this.formVeterinario.correo);
      console.log("Contraseña: " + this.formVeterinario.password);

        this.veterinarioService.login(this.formVeterinario).subscribe(
         data => {
            this.router.navigate(["/mascotas"]);
          }
          )
}

  correo!: string;
  password!: string;

}
