// modificar-gato.component.ts
import { Component } from '@angular/core';
import { GatoService } from '../service/gato.service';
import { ActivatedRoute } from '@angular/router';
import { Gato } from '../models/gato.model';

@Component({
  selector: 'app-modificar-gato',
  templateUrl: './modificar-gato.component.html',
  styleUrls: ['./modificar-gato.component.css']
})
export class ModificarGatoComponent {

    constructor(private gatoService: GatoService, private route: ActivatedRoute) { }

    ngOnInit() {
      this.route.params.subscribe(params => {
        this.displayinfo(parseInt(params['id']));
      })
    }
  gato: Gato = {
    id: 0,
    nombre: '',
    raza: '',
    edad: 0,
    foto: '',
    enfermedad: '',
    estado: true,
  };

    displayinfo(id: number) {
      this.gato = this.gatoService.findById(id)!;
    }

    modificarGato(gato: Gato) {
      
      this.gatoService.actualizarGato(gato);
    }
}