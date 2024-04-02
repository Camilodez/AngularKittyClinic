// modificar-gato.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-modificar-gato',
  templateUrl: './modificar-gato.component.html',
  styleUrls: ['./modificar-gato.component.css']
})
export class ModificarGatoComponent {
    gato = {
        nombre: '',
        raza: '',
        edad: null,
        foto: ''
    };

    updateGato() {
       
    }
}