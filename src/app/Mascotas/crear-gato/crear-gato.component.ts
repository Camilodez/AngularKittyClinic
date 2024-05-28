import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Gato } from 'src/app/models/gato.model';
import { Veterinario } from 'src/app/models/veterinario.model';
import { GatoService } from 'src/app/services/gato.service';
import { Usuario, UsuarioService } from 'src/app/services/usuario.service';
import { VeterinarioService } from 'src/app/services/veterinario.service';

@Component({
  selector: 'app-crear-gato',
  templateUrl: './crear-gato.component.html',
  styleUrls: ['./crear-gato.component.css']
})
export class CrearGatoComponent {

  constructor(private gatoService: GatoService, public router: Router, private usuarioService: UsuarioService,
    private vetService: VeterinarioService
  ) { }

    isAdmin = false;

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

    vet!: Veterinario;

    ngOnInit(): void {
      this.vetService.veterinarioHome().subscribe(
        (vetData: any) => {
          this.vet = vetData;
          console.log("Veterinario recibido:", this.vet);
          this.isAdmin = true
        },
        (error) => {
          console.error('An error occurred:', error);
          this.router.navigate(['/login-veterinario']);
        }
      );
    }
    
      async onSubmit(form: any) {
      this.gato.usuario =  (await this.usuarioService.findbyCedula(this.cedula!)).data;
      console.log(this.cedula);
      this.gato = Object.assign({}, this.gato); 
      console.log(this.gato);
      this.gatoService.save(this.gato);
      this.router.navigate(['/mascotas']);
    }

}