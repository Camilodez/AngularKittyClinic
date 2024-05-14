import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  cedula!: number;

  constructor(
    private usuarioservice: UsuarioService, 
    private router: Router) { }

    ngOnInit(): void {
    
    }

    loginUsuario(cedula: number): void {
      console.log(cedula); // Crear objeto Usuario
      this.usuarioservice.login(cedula).subscribe(
        (data) => {
          this.router.navigate(['/loginuser',cedula]);
        },
        (error) => {

          console.log(cedula);
          console.error('Error en la solicitud:', error); // Manejar errores de solicitud
        }
      );
    }
}