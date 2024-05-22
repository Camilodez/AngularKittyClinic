import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Uservet } from 'src/app/models/uservet';
import { VeterinarioService } from 'src/app/services/veterinario.service';

@Component({
  selector: 'app-login-veterinario',
  templateUrl: './login-veterinario.component.html',
  styleUrls: ['./login-veterinario.component.css']
})
export class LoginVeterinarioComponent {

  mostrarContrasena: boolean = false;

  constructor(private veterinarioService: VeterinarioService, private router: Router) { }

  correoVeterinario: string = "";
  passwordVeterinario: string = "";

  toggleMostrarContrasena(): void {
    this.mostrarContrasena = !this.mostrarContrasena;
  }

  login() {
    let user: Uservet = {
      correo: this.correoVeterinario,
      password: this.passwordVeterinario
    };

    this.veterinarioService.login(user).subscribe(
      data => {
        localStorage.setItem("token", data);
        console.log("token: " + data);
        this.router.navigate(["/veterinario/home"]);
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }
}
