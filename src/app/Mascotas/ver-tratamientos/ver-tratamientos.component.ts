import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tratamiento } from 'src/app/models/tratamiento.model';
import { TratamientoService } from 'src/app/services/tratamiento.service';

@Component({
  selector: 'app-ver-tratamientos',
  templateUrl: './ver-tratamientos.component.html',
  styleUrls: ['./ver-tratamientos.component.css']
})
export class VerTratamientosComponent implements OnInit {
  tratamientos: any[] = [];

  constructor(
    private tratamientoService: TratamientoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.cargarTratamientos()
  }

  cargarTratamientos(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.tratamientoService.obtenerTratamientosVet(id).subscribe(
      (data) => {
        this.tratamientos = data;
      },
      (error) => {
        console.error('Error al cargar tratamientos', error);
      }
    );
  }
}