import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Gato } from 'src/app/models/gato.model';
import { GatoService } from 'src/app/services/gato.service';

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
    private http: HttpClient
  ) { }

  ngOnInit(): void {
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
  CambiarEstado(_t20: Gato) {
    throw new Error('Method not implemented.');
    }

}
