import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Gato } from 'src/app/models/gato.model';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent {

cerrarInfo() {

}
siguienteGato() {

}
anteriorGato() {

}


  constructor(private usuarioService: UsuarioService, public router: Router) { 

  }

 
  usuario: any; 
  gato: any;
  
  ListaGatos: Gato[] = [];

  ngOnInit(): void {
    const userId = 1; // Aquí debes obtener el ID real del usuario, quizás de un servicio de autenticación o parámetros de ruta
    this.buscarUsuarioConGatos(userId);
  }

  buscarUsuarioConGatos(id: number) {
    this.usuarioService.SearchUser(id).subscribe((data) => {
      this.usuario = data;
      console.log(this.usuario); // Para depuración, mostrará el usuario con gatos en la consola
    }, error => {
      console.error('Error al recuperar el usuario y sus gatos', error);
    });
  }


 

}
