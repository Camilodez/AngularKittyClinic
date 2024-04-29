import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Gato } from 'src/app/models/gato.model';
import { GatoService } from 'src/app/services/gato.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-lista-gatos',
  templateUrl: './lista-gatos.component.html',
  styleUrls: ['./lista-gatos.component.css']
})
export class ListaGatosComponent {


  @ViewChild('sidebar') sidebar!: ElementRef;
  @ViewChild('vineta') vineta! :ElementRef;
  

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
  constructor(
    private gatoService: GatoService,
    private http: HttpClient,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.sharedService.mostrarOcultar = true;
    this.buscarGatos();
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