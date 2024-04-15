import { Component, ElementRef, ViewChild } from '@angular/core';
import { Gato } from '../../models/gato.model';
import { GatoService } from '../../service/gato.service';
import axios, { AxiosResponse } from 'axios';


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

  constructor(private gatoService: GatoService) { 

  }

  ngOnInit(): void {
    this.buscarTodos();
     this.gatoService.findAll();

  }

  //metodos
  mostrarGato(gato: Gato) {
    this.seleccion = gato;
  }

  agregarGato(gato: Gato) {
  }

  eliminarGato(gato: Gato) {

  }

  async buscarTodos() {
    try{
      const response: AxiosResponse = await axios.get('http://localhost:8090/mascota/lista');
      console.log(response);
      this.ListaGatos = response.data;
    }
    catch(error){
      console.error(error);
    }
  }

}
