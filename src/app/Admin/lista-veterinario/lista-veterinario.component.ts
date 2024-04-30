import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Veterinario } from 'src/app/models/veterinario.model';
import { VeterinarioService } from 'src/app/services/veterinario.service';

@Component({
  selector: 'app-lista-veterinario',
  templateUrl: './lista-veterinario.component.html',
  styleUrls: ['./lista-veterinario.component.css']
})
export class ListaVeterinarioComponent {


  vet: Veterinario | null = null;
  
  
  constructor(
    private veterinarioService: VeterinarioService,
    private http: HttpClient,
    public router: Router
  ) { }
  
  
  ListaVeterinarios : Veterinario[] = [];

  ngOnInit(): void {
    this.searchVets();
    this.obtenerDatosVeterinario();
  }

  async searchVets() {
    this.ListaVeterinarios = (await this.veterinarioService.findAll()).data;
    console.log(this.ListaVeterinarios);
  }


  obtenerDatosVeterinario(): void {
    const vetDataString = sessionStorage.getItem("veterinario");

    if (vetDataString !== null) {
      const vetData: Veterinario = JSON.parse(vetDataString);
      this.vet = vetData; // Asigna los datos del veterinario a 'vet'
    }
  }


  delete(id: number) {
    this.veterinarioService.delete(id).subscribe(
      {
        next: (resp) => {
          window.location.reload();
        },
        error: (error) => {
          console.error('Error al eliminar el usuario', error);
        }
      });
    
  }

  CambiarEstado(id: number): void {
    this.veterinarioService.cambiarEstado(id).subscribe({
      next: (response) => {
        window.location.reload();
      }
    });
  }

}
