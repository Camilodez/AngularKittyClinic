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



  ListaVeterinarios : Veterinario[] = [];


  constructor(
    private veterinarioService: VeterinarioService,
    private http: HttpClient,
    public router: Router
  ) { }



  ngOnInit(): void {
    this.searchVets();
  }

  searchVets() {
    this.veterinarioService.findAll().subscribe(
      (vets: Veterinario[]) => {
        this.ListaVeterinarios = vets;
      }
    );
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


}
