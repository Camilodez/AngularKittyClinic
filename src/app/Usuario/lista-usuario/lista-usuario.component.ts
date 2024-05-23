import { NotExpr } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/admin.model';
import { Usuario } from 'src/app/models/usuario.model';
import { Veterinario } from 'src/app/models/veterinario.model';
import { AdminService } from 'src/app/services/admin.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { VeterinarioService } from 'src/app/services/veterinario.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent {

  isAdmin: boolean = false;
  admin!: Admin;
  vet!: Veterinario;
 
  constructor(private usuarioService: UsuarioService, public router: Router,
    private adminService: AdminService, private vetService: VeterinarioService
  ) { }

    ListaUsuario: Usuario[] = [];

    ngOnInit(): void {
      this.adminService.adminDetails().subscribe(
        (data) => {
          this.admin = data;
          console.log(this.admin);
          this.isAdmin = true;
          this.buscarUsuario();
        },
        (error) => {
          console.error('An error occurred:', error);
          this.vetService.veterinarioHome().subscribe(
            (vetData) => {
              this.vet = vetData;
              console.log("Veterinario recibido:", this.vet);
              this.isAdmin = true;
              this.buscarUsuario();
            },
            (error) => {
              console.error('An error occurred:', error);
              this.router.navigate(['/login-veterinario']);
            }
          );
        }
      )
    }

    


    buscarUsuario() {
      this.usuarioService.findAll().subscribe(
        (usuario: Usuario[]) => {
          console.log('Lista de usuarios:', usuario);
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
