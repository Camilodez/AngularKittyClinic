import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  cedulaCliente: string = "";

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  loginUsuario() {
    let user: User = {
      cedula: this.cedulaCliente,
      password: ""  // Contraseña fija
    };

   

    console.log(user);

    this.usuarioService.login(user).subscribe(
      (token) => {
        if (token) {
          localStorage.setItem("token", String(token));
          console.log("token: " + token)
          this.router.navigate([`/loginuser/${this.cedulaCliente}`]);
        } else {
          console.error('Login failed');
        }
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }
}
