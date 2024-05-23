import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/models/admin.model';
import { Veterinario } from 'src/app/models/veterinario.model';
import { AdminService } from 'src/app/services/admin.service';
import { VeterinarioService } from 'src/app/services/veterinario.service';

@Component({
  selector: 'app-modificar-veterinario',
  templateUrl: './modificar-veterinario.component.html',
  styleUrls: ['./modificar-veterinario.component.css']
})
export class ModificarVeterinarioComponent implements OnInit {
  veterinario: Veterinario = {
    id: 0,
    cedula: 0,
    nombre: '',
    apellido: '',
    correo: '',
    password: '',
    foto: '',
    especialidad: '',
    estado: true
  };

  constructor(
    private veterinarioService: VeterinarioService,
    private route: ActivatedRoute,
    private router: Router,
    private adminService: AdminService
  ) { }


  admin!: Admin
  isAdmin = false

  ngOnInit() {

    this.adminService.adminDetails().subscribe(
      (data) => {
        this.admin = data;
        console.log(this.admin);
        this.isAdmin = true;
      },
      (error) => {
        console.error('An error occurred:', error);
        this.router.navigate(['/admin-access-4f5e9d90-93e0-4c6b-88b1-711454a5b611']);
      }
    );

    this.route.params.subscribe(params => {
      const correo: string = params['correo'];
      this.displayinfo(correo);
    });
  }

  displayinfo(correo: string) {
    this.veterinarioService.searchByCorreo(correo).subscribe({
      next: (veterinario: Veterinario) => {
        this.veterinario = veterinario;
        console.log(this.veterinario);
      },
      error: (error) => {
        console.error('Error al cargar los datos del veterinario', error);
      }
    });
  }

  onSubmit(form: any) {
    this.veterinario = { ...this.veterinario, ...form.value };
    this.veterinarioService.update(this.veterinario).subscribe({
      next: (response) => {
        console.log('Veterinario actualizado', response);
        this.router.navigate(['/veterinarios']);
      },
      error: (error) => {
        console.error('Error al actualizar el veterinario', error);
      }
    });
  }
}
