import { NotExpr } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent {

 
  constructor(private usuarioService: UsuarioService, public router: Router) { }

    ListaUsuario: Usuario[] = [];

    ngOnInit(): void {
      this.buscarUsuario();
    }

    


    buscarUsuario() {
      this.usuarioService.findAll().subscribe(
        (usuario: Usuario[]) => {
          this.ListaUsuario = usuario;
        },
        (error) => {
          console.error('An error occurred:', error);
        }
      );
    }

    delete(id: number) {
        this.usuarioService.eliminarPorId(id).subscribe(
          {
            next: (resp) => {
              window.location.reload();
            },
            error: (error) => {
              console.error('Error al eliminar el usuario', error);
            }
          });
        
      }


}
