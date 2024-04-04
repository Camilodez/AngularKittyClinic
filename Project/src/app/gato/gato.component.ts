import { Component } from '@angular/core';
import { Gato } from '../models/gato.model';
import { GatoService } from '../service/gato.service';

@Component({
  selector: 'app-gato',
  templateUrl: './gato.component.html',
  styleUrls: ['./gato.component.css']
})
export class GatoComponent {

  ListaGatos: Gato[] = [];

  seleccion: Gato | undefined;

  constructor(private gatoService: GatoService) { 

  }

  ngOnInit(): void {
    this.ListaGatos = this.gatoService.findAll();
  }

  //metodos
  mostrarGato(gato: Gato) {
    this.seleccion = gato;
  }

  agregarGato(gato: Gato) {
    this.ListaGatos.push(gato);
    this.gatoService.agregarGato(gato);
  }

  eliminarGato(gato: Gato) {
    var index = this.ListaGatos.indexOf(gato)
    this.ListaGatos.splice(index, 1);
    this.gatoService.borrarGato(gato.id);
  }

}
