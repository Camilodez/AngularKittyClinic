import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gato } from 'src/app/models/gato.model';
import { Veterinario } from 'src/app/models/veterinario.model';
import { GatoService } from 'src/app/services/gato.service';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-lista-gatos',
  templateUrl: './lista-gatos.component.html',
  styleUrls: ['./lista-gatos.component.css']
})
export class ListaGatosComponent {

  // para el sidebar de vineta
  @ViewChild('sidebar') sidebar!: ElementRef;
  @ViewChild('vineta') vineta!: ElementRef;


  mostrarSidebar(): void {
    this.sidebar.nativeElement.classList.add('show');
    this.vineta.nativeElement.style.display = 'none';
  }

  mostrarVineta(): void {
    if (!this.sidebar.nativeElement.classList.contains('show')) {
      this.vineta.nativeElement.style.display = 'block';
    }
  }

  ocultarSidebar(): void {
    this.sidebar.nativeElement.classList.remove('none');
  }


  filtroNombre: string = '';
  ListaGatos: Gato[] = [];
  constructor(private gatoService: GatoService, private http: HttpClient,private sharedService: SharedService, private route: ActivatedRoute
  ) {
    const vetDataString = sessionStorage.getItem("veterinario");

    if (vetDataString !== null) {
      // Convertir el JSON del sessionStorage en un objeto de tipo VeterinarioData
      const vetData: Veterinario = JSON.parse(vetDataString);
  
      // Crear un objeto de tipo Veterinario usando los datos obtenidos del sessionStorage
      
      const veterinario: Veterinario = {
        id: vetData.id, // Este campo podría no ser necesario en el formulario, dependiendo de tu lógica
        cedula: vetData.cedula,
        nombre: vetData.nombre,
        apellido: vetData.apellido,
        correo: vetData.correo,
        password: vetData.password,
        foto: vetData.foto,
        especialidad: vetData.especialidad,
        estado: vetData.estado
      };

      this.vet = veterinario;
  }
  }

  vet: Veterinario | null = null;

  ngOnInit(): void {
    this.sharedService.mostrarOcultar = true;
    this.buscarGatos();
    console.log("Veterinario:", this.vet);

    this.route.params.subscribe(params => {
      if (this.vet) {
        this.vet.id = params['id'];
      }
    });
  }
  buscarGatos() {
    this.gatoService.findAll().subscribe(
      (gatos: Gato[]) => {
        this.ListaGatos = gatos;
      },
      (error) => {
        console.error('An error occurred:', error);
      }
    );
  }
  CambiarEstado(id: number) {
    this.gatoService.cambiarEstado(id).subscribe({
      next: (response) => {
        
        window.location.reload();
      }
    });
  }


  filtrarGatosPorNombre(): Gato[] {
    if (!this.filtroNombre.trim()) {
      return this.ListaGatos;
    }
    return this.ListaGatos.filter(gato =>
      gato.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase())
    );
  }

}