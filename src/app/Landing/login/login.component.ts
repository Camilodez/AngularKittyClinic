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
      this.usuarioservice.findAll().subscribe(data => {
        this.listaUsuarios = data;
      });
    }

    loginUsuario(cedula:number): void {
    const clienteEncontrado = this.listaUsuarios.find(cliente => cliente.cedula === cedula);

    if (clienteEncontrado) {
      this.router.navigate(['/loginuser/' + clienteEncontrado.id]);
    } else {
      
    }
    }
}