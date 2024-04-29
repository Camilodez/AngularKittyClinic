import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
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


  ListaGatos: Gato[] = [];
  constructor(private gatoService: GatoService, private http: HttpClient,private sharedService: SharedService
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
  } else {
      // Si el valor es null, puedes asignar un valor predeterminado o lanzar una alerta
      // Por ejemplo:
      // this.vet = new Veterinario("Nombre Predeterminado", 0, "Especialidad Predeterminada");
      alert("No se encontraron datos de veterinario en el sessionStorage.");
    }
  }

  vet: Veterinario | null = null;

  ngOnInit(): void {
    this.sharedService.mostrarOcultar = true;
    this.buscarGatos();
    console.log("Veterinario:", this.vet);
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

}