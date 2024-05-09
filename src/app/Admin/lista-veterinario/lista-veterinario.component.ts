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


  
  
  constructor(
    private veterinarioService: VeterinarioService,
    private http: HttpClient,
    public router: Router
  ) {


    
   }
  
  
  ListaVeterinarios : Veterinario[] = [];

  ngOnInit(): void {
    this.searchVets();
  }

  async searchVets() {
    const allVets = (await this.veterinarioService.findAll()).data;
    this.ListaVeterinarios = allVets.filter(vet => !(vet.nombre === "admin" && vet.apellido === "admin"));
    console.log(this.ListaVeterinarios);
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
