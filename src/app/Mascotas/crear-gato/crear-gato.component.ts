import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Gato } from 'src/app/models/gato.model';
import { GatoService } from 'src/app/services/gato.service';
import { Usuario, UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-gato',
  templateUrl: './crear-gato.component.html',
  styleUrls: ['./crear-gato.component.css']
})
export class CrearGatoComponent {

  constructor(private gatoService: GatoService, public router: Router, private usuarioService: UsuarioService) { }

    cedula?: number;

    usuario?: Usuario;

    gato: Gato = {
      nombre: '',
      raza: '',
      edad: 0,
      foto: '',
      enfermedad: '',
      estado: true,
      usuario: undefined,
      id: 0,
    };
    
      async onSubmit(form: any) {
      this.gato.usuario =  (await this.usuarioService.findbyCedula(this.cedula!)).data;
      console.log(this.cedula);
      this.gato = Object.assign({}, this.gato); 
      console.log(this.gato);
      this.gatoService.save(this.gato);
      this.router.navigate(['/mascotas']);
    }

}