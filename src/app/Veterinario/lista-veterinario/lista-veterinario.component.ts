import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Veterinario } from 'src/app/models/veterinario.model';
import { VeterinarioService } from 'src/app/services/veterinario.service';

@Component({
  selector: 'app-lista-veterinario',
  templateUrl: './lista-veterinario.component.html',
  styleUrls: ['./lista-veterinario.component.css']
})
export class ListaVeterinarioComponent implements OnInit {
  ListaVeterinarios: Veterinario[] = [];

  constructor(
    private veterinarioService: VeterinarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buscarVets();
  }

  buscarVets() {
    this.veterinarioService.findAllVets().subscribe({
      next: (veterinarios) => {
        this.ListaVeterinarios = veterinarios;
      },
      error: (error) => {
        console.error('Error al cargar la lista de veterinarios', error);
      }
    });
  }

  Delete(correo: string): void {
    this.veterinarioService.delete(correo).subscribe({
      next: (resp) => {
        this.buscarVets(); // Volver a cargar la lista después de eliminar
      },
      error: (error) => {
        console.error('Error al eliminar el usuario', error);
      }
    });
  }

  CambiarEstado(correo: string): void {
    this.veterinarioService.cambiarEstado(correo).subscribe({
      next: (response) => {
        console.log('Estado cambiado exitosamente', response);
        this.buscarVets(); // Volver a cargar la lista después de cambiar el estado
      },
      error: (error) => {
        console.error('Error al cambiar el estado', error);
        window.location.reload();
      }
    });
  }
}
