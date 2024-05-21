import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  MostrarOcultar = false;
  listaUsuarios!: Usuario[];
  cedula!: User;

  constructor(
    private usuarioservice: UsuarioService, 
    private router: Router) { }

    ngOnInit(): void {
    
    }

    loginUsuario(cedula: User): void {
      console.log(cedula); // Crear objeto Usuario
      this.usuarioservice.login(cedula).subscribe(
        (data) => {
          localStorage.setItem("token", String(data));
          this.router.navigate(['/cliente/home',cedula]);
        },
        (error) => {

          console.log(cedula);
          console.error('Error en la solicitud:', error); // Manejar errores de solicitud
        }
      );
    }
}