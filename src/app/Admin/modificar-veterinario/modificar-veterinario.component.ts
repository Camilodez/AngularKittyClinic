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

  
  constructor(private veterinarioService: VeterinarioService,private route: ActivatedRoute, 
    public router: Router) { 
      this.route.params.subscribe(params => {
        this.displayinfo(parseInt(params['id']));
        console.log(this.veterinario);
      })
  
    }
    
    ngOnInit() {
      this.route.params.subscribe(params => {
        this.displayinfo(parseInt(params['id']));
        console.log(this.veterinario);
      })
    }

    veterinario: Veterinario = {
      id: 0, // Este campo podría no ser necesario en el formulario, dependiendo de tu lógica
      cedula: 0,
      nombre: '',
      apellido: '',
      password: '',
      foto: '',
      especialidad: '',
      estado: true
    };

  
  async displayinfo(id: number) {
    this.veterinario = (await this.veterinarioService.searchbyId(id)).data;
    console.log(this.veterinario);
  }


  onSubmit(form: any) {
    this.veterinario = Object.assign({}, this.veterinario);
    console.log(this.veterinario);
    this.veterinarioService.save(this.veterinario);
    this.router.navigate(['/veterinarios']);
  }
}
