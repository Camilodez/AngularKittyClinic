
import { Component, EventEmitter } from '@angular/core';
import { GatoService } from '../../services/gato.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Gato } from '../../models/gato.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import axios, { AxiosResponse } from 'axios';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css']
})
export class ModificarUsuarioComponent {

  
  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, 
    public formBuilder: FormBuilder, public router: Router) {

      this.route.params.subscribe(params => {
        this.displayinfo(parseInt(params['id']));
        console.log(this.usuario)
  
      })
      console.log("entre al constructor")
    }
  
  
    ngOnInit() {
      console.log(this.usuario)
    }
  

    usuario: Usuario={
      id: 0,
      nombre: '',
      correo: '',
      cedula: 0,
      genero: '',
      edad: 0
    };
    
  
    async displayinfo(id: number) {
      this.usuario = (await this.usuarioService.buscarPorIdAxios(id)).data;
    }
  
    onSubmit(form:any) {
      this.usuario = Object.assign({}, this.usuario);
      console.log(this.usuario);
      this.usuarioService.actualizar(this.usuario);
      this.router.navigate(['/lista-usuarios']);
    }

}
