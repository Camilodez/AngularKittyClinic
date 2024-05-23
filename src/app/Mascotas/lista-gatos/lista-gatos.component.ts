import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Admin } from 'src/app/models/admin.model';
import { Gato } from 'src/app/models/gato.model';
import { Veterinario } from 'src/app/models/veterinario.model';
import { AdminService } from 'src/app/services/admin.service';
import { GatoService } from 'src/app/services/gato.service';
import { SharedService } from 'src/app/services/shared.service';
import { VeterinarioService } from 'src/app/services/veterinario.service';


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
  constructor(private gatoService: GatoService, private http: HttpClient,private sharedService: SharedService,
     private route: ActivatedRoute, private vetService: VeterinarioService, private adminService: AdminService) {

    const vetDataString = localStorage.getItem("token");
  }

  isAdmin: boolean = false;

  vet!: Veterinario;

  admin! : Admin;

  ngOnInit(): void {
    this.sharedService.muestraOculta = true;
    this.sharedService.mostrarOcultar = true;
    this.sharedService.salir = true;

    this.adminService.adminDetails().subscribe((data) => {
      this.admin = data;
      console.log(this.admin);
      this.buscarGatos();
    });

    this.vetService.veterinarioHome().subscribe(
      (vetData: any) => {
        this.vet = vetData;
        console.log("Veterinario recibido:", this.vet);
        this.buscarGatos();
        this.isAdmin = true;
      },
      (error) => {
        console.error('An error occurred:', error);
      }
    );
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