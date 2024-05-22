import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tratamiento } from 'src/app/models/tratamiento.model';
import { Veterinario } from 'src/app/models/veterinario.model';
import { TratamientoService } from 'src/app/services/tratamiento.service';
import { VeterinarioService } from 'src/app/services/veterinario.service';

@Component({
  selector: 'app-ver-tratamientos',
  templateUrl: './ver-tratamientos.component.html',
  styleUrls: ['./ver-tratamientos.component.css']
})
export class VerTratamientosComponent implements OnInit {
  tratamientos: any[] = [];

  constructor(
    private tratamientoService: TratamientoService,
    private route: ActivatedRoute,
    private vetService: VeterinarioService
  ) { }

  ngOnInit(): void {
    this.vetService.veterinarioHome().subscribe(
      (vetData: any) => {
        this.vet = vetData;
        console.log("Veterinario recibido:", this.vet);
        this.cargarTratamientos()
      },
      (error) => {
        console.error('An error occurred:', error);
      }
    );
  }
    vet: Veterinario = {
    id: 0,
    cedula: 0,
    nombre: '',
    apellido: '',
    correo: '',
    password: '',
    foto: '',
    especialidad: '',
    estado: false
  };

  cargarTratamientos(): void {
    this.tratamientoService.obtenerTratamientosVet(this.vet.id).subscribe(
      (data) => {
        this.tratamientos = data;
        console.log('Tratamientos:', this.tratamientos);
      },
      (error) => {
        console.error('Error al cargar tratamientos', error);
      }
    );
  }
}

