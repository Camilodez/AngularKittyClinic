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
    this.vineta.nativeElement.style.display = 'block';
  }


  /*------------------------- */

  ListaGatos: Gato[] = [];

  seleccion: Gato | undefined;

  constructor(private gatoService: GatoService, public router: Router) { 

  }

  ngOnInit(): void {
    this.loadCats();
  }

  //metodos
  mostrarGato(gato: Gato) {
    this.seleccion = gato;
  }

  agregarGato(gato: Gato) {
    
  }

  cambiarEstado(id: number, gato: Gato): void {
   
    this.gatoService.updateEstado(id).subscribe(_=>(this.gatoService.getEstado(id).subscribe(v=>this.gatoService.setEstado(v,gato))));
  }



  
  loadCats() {
    this.gatoService.findAll().subscribe({
      next: (cats: Gato[]) => this.ListaGatos = cats,
      error: (error: any) => console.error('Error fetching cats', error)
    });
  }

 
}
