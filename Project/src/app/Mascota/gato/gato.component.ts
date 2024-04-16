import { Component, ElementRef, ViewChild } from '@angular/core';
import { Gato } from '../../models/gato.model';
import { GatoService } from '../../services/gato.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-gato',
  templateUrl: './gato.component.html',
  styleUrls: ['./gato.component.css']
})
export class GatoComponent {

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


  /*------------------------- */

  ListaGatos: Gato[] = [];

  seleccion: Gato | undefined;

  constructor(private gatoService: GatoService, public router: Router) { 

  }

  ngOnInit(): void {
    this.buscarTodos();
  }

  //metodos
  mostrarGato(gato: Gato) {
    this.seleccion = gato;
  }

  agregarGato(gato: Gato) {
    
  }

  eliminarGato(gato: Gato) {
    this.gatoService.deletebyId(gato.id!);
    this.buscarTodos();
    window.location.reload();
  }

  async buscarTodos() {
    this.ListaGatos = (await this.gatoService.findAll()).data;
  }

}
