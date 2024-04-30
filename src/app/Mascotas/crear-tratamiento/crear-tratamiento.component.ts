import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DrogaService } from 'src/app/services/droga.service';

@Component({
  selector: 'app-crear-tratamiento',
  templateUrl: './crear-tratamiento.component.html',
  styleUrls: ['./crear-tratamiento.component.css']
})
export class CrearTratamientoComponent implements OnInit {
  // Declaración correcta de tratamientoForm como propiedad de la clase.
  tratamientoForm = new FormGroup({
    fecha: new FormControl(''),
    veterinario: new FormControl(''),
    gato: new FormControl(''),
    droga: new FormControl('')
  });

  drogas: string[] = [];
  gato = { nombre: '' };  // Asegúrate de inicializar esto correctamente, posiblemente con datos de un servicio
  veterinario = { nombre: '' }; // Inicializa de forma similar si es necesario

  constructor(private drogaService: DrogaService) {}

  ngOnInit(): void {
    this.drogaService.drogas().subscribe(
      drogas => this.drogas = drogas,
      error => console.error('Error al cargar las drogas', error)
    );
  }

  onSubmit(): void {
    console.log(this.tratamientoForm.value);  // Esto imprimirá correctamente el valor del formulario
  }
}
