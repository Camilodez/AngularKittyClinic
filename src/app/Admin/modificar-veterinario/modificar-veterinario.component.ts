import { Component, OnInit } from '@angular/core';

import { Veterinario } from 'src/app/models/veterinario.model';
import { VeterinarioService } from 'src/app/services/veterinario.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-modificar-veterinario',
  templateUrl: './modificar-veterinario.component.html',
  styleUrls: ['./modificar-veterinario.component.css']
})
export class ModificarVeterinarioComponent implements OnInit {


 

  veterinario: Veterinario = {
    id: 0, // Este campo podría no ser necesario en el formulario, dependiendo de tu lógica
    cedula: 0,
    nombre: '',
    apellido: '',
    password: '',
    foto: '',
    especialidad: '',
  };

  constructor(
    private veterinarioService: VeterinarioService,
    private route: ActivatedRoute, 
    public router: Router
  ) { }

  
  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = parseInt(params['id']);
      if (id === 0) {
        // Preparar para crear un nuevo usuario
        console.log('Preparar para crear un nuevo Veterinario');
      } else {
        // Cargar información del usuario existente
        this.displayinfo(id);
      }
    });
  }


  
  async displayinfo(id: number) {
    try {
      const response = await this.veterinarioService.searchbyId(id);
      this.veterinario = response.data;
      console.log(this.veterinario);
    } catch (error) {
      console.error('Error cargando el usuario', error);
    }
  }


  onSubmit(formValues: any) {
    this.veterinario = Object.assign({}, this.veterinario, formValues);
    console.log(this.veterinario);
    this.veterinarioService.save(this.veterinario);
    this.router.navigate(['/veterinarios']);
  }





  

}
