import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EnviarTratamiento } from 'src/app/models/enviartrat.model';
import { Gato } from 'src/app/models/gato.model';
import { Tratamiento } from 'src/app/models/tratamiento.model';
import { Veterinario } from 'src/app/models/veterinario.model';
import { DrogaService } from 'src/app/services/droga.service';
import { GatoService } from 'src/app/services/gato.service';
import { TratamientoService } from 'src/app/services/tratamiento.service';
import { VeterinarioService } from 'src/app/services/veterinario.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-crear-tratamiento',
  templateUrl: './crear-tratamiento.component.html',
  styleUrls: ['./crear-tratamiento.component.css']
})
export class CrearTratamientoComponent implements OnInit {
  // Declaración correcta de tratamientoForm como propiedad de la clase.
  constructor(private drogaService: DrogaService, private route: ActivatedRoute,
     private gatoService: GatoService, private tratamientoService: TratamientoService,
     public router: Router, private vetService: VeterinarioService) {  }

  vet!:Veterinario;

  drogas: string[] = [];

  gato!: Gato;

  tratamiento: EnviarTratamiento = {
    fecha: '',
    id: 0,
  };

  droga: string = '';

  ngOnInit() {
    this.vetService.veterinarioHome().subscribe(
      (vetData: any) => {
        this.vet = vetData;
        console.log("Veterinario recibido:", this.vet);
      },
      (error) => {
        console.error('An error occurred:', error);
      }
    );
    this.drogaService.drogas().subscribe(
      drogas => this.drogas = drogas,
      error => console.error('Error al cargar las drogas', error)
    );

    this.route.params.subscribe(params => {
      this.obtenerGato(parseInt(params['id']));
    })
  }

  async onSubmit(form:any) {
    this.tratamiento.droga = (await this.drogaService.drogaNombre(this.droga)).data;
    this.tratamiento.felino = this.gato;
    this.tratamiento.veterinario = this.vet;

    console.log("Tratamiento: ", this.tratamiento);
    
    this.tratamientoService.agregarTratamiento(this.tratamiento);
    this.router.navigate(['/mascotas']);
  }

  async obtenerGato(id: number) {
    this.gato = (await this.gatoService.findById(id)).data;
  }
}
