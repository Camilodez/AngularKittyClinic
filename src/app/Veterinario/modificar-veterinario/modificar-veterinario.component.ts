import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veterinario } from 'src/app/models/veterinario.model';
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
    private router: Router
  ) {}

  ngOnInit() {

    const token = localStorage.getItem('token');

    if (token) {
       this.route.params.subscribe(params => {
      const correo: string = params['correo'];
      this.displayinfo(correo);
    });
    }
  
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
