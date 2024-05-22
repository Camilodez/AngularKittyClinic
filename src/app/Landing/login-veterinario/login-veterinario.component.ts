import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { TratamientoService } from 'src/app/services/tratamiento.service';
import { VeterinarioService } from 'src/app/services/veterinario.service';

@Component({
  selector: 'app-login-veterinario',
  templateUrl: './login-veterinario.component.html',
  styleUrls: ['./login-veterinario.component.css']
})
export class LoginVeterinarioComponent {

  mostrarContrasena: boolean = false; // Añade esta línea aquí

  constructor(private veterinarioService: VeterinarioService,private router: Router) { } 



  formVeterinario: User = {
    cedula: '',
    password: '',
  }

  toggleMostrarContrasena(): void {
    this.mostrarContrasena = !this.mostrarContrasena;
  }
  
 

    login (correo: string, password: string) {

      this.formVeterinario.cedula = correo;
      this.formVeterinario.password = password;
  
        this.veterinarioService.login(this.formVeterinario).subscribe(
         data => {
            localStorage.setItem("token", String(data));
            this.router.navigate(["/veterinario/home"]);
          })
}

  correo!: string;
  password!: string;

}
