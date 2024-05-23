import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import { Veterinario } from 'src/app/models/veterinario.model';
import { VeterinarioService } from 'src/app/services/veterinario.service';
import { AdminService } from 'src/app/services/admin.service';
import { Admin } from 'src/app/models/admin.model';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css']
})
export class ModificarUsuarioComponent implements OnInit {
  usuario: Usuario = {
    id: 0,
    nombre: '',
    correo: '',
    cedula: "",
    genero: '',
    edad: 0
  };

  constructor(
    private usuarioService: UsuarioService, 
    private route: ActivatedRoute, 
    public formBuilder: FormBuilder, 
    public router: Router,
    private vetService: VeterinarioService,
    private adminService: AdminService
  ) { }


  isAdmin = false;
  vet! : Veterinario;
  admin!: Admin;

  ngOnInit() {


    this.adminService.adminDetails().subscribe((data) => {
      this.admin = data;
      console.log(this.admin);
      this.isAdmin = true;
    });

    this.vetService.veterinarioHome().subscribe(
      (vetData: any) => {
        this.vet = vetData;
        console.log("Veterinario recibido:", this.vet);
        this.isAdmin = true;
      },
      (error) => {
        console.error('An error occurred:', error);
      }
    );

    this.route.params.subscribe(params => {
      const id = parseInt(params['id']);
      if (id === 0) {
        // Preparar para crear un nuevo usuario
        console.log('Preparar para crear un nuevo usuario');
      } else {
        // Cargar información del usuario existente
        this.displayinfo(id);
      }
    });
  }

  async displayinfo(id: number) {
    try {
      const response = await this.usuarioService.buscarPorIdAxios(id);
      this.usuario = response.data;
      console.log(this.usuario);
    } catch (error) {
      console.error('Error cargando el usuario', error);
    }
  }

  onSubmit(form: any) {
    this.usuario = Object.assign({}, this.usuario);
    console.log(this.usuario);
    this.usuarioService.agregar(this.usuario);
    this.router.navigate(['/lista-usuarios']);
  }
}
