import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DrogaService } from 'src/app/services/droga.service';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-crear-tratamiento',
  templateUrl: './crear-tratamiento.component.html',
  styleUrls: ['./crear-tratamiento.component.css']
})
export class CrearTratamientoComponent implements OnInit {
  tratamientoForm!: FormGroup;
  drogas: string[] = [];  // Ajusta esto si las drogas son objetos

  constructor(private drogaService: DrogaService) { }

  ngOnInit(): void {
    this.tratamientoForm = new FormGroup({
      droga: new FormControl('', Validators.required)
    });

    this.drogaService.drogas().subscribe(
      (data) => {
        this.drogas = data;
      },
      (error) => {
        console.error('Error al cargar las drogas', error);
        // Mostrar algún mensaje de error en la UI
      }
    );
  }

  onSubmit(): void {
    console.log(this.tratamientoForm.value);
  }
}
