import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Gato } from 'src/app/models/gato.model';
import { GatoService } from 'src/app/services/gato.service';

@Component({
  selector: 'app-crear-gato',
  templateUrl: './crear-gato.component.html',
  styleUrls: ['./crear-gato.component.css']
})
export class CrearGatoComponent {

  constructor(private gatoService: GatoService, public router: Router) { }

    gato: Gato = {
      nombre: '',
      raza: '',
      edad: 0,
      foto: '',
      enfermedad: '',
      estado: true,
      usuario: undefined,
      id: 0,
      tratamientos: []
    };
    
    onSubmit(form: any) {
      this.gato = Object.assign({}, this.gato);
      console.log(this.gato);
      this.gatoService.save(this.gato);
      this.router.navigate(['/mascotas']);
    }

}