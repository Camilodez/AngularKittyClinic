// modificar-gato.component.ts
import { Component, EventEmitter } from '@angular/core';
import { GatoService } from '../../services/gato.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Gato } from '../../models/gato.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import axios, { AxiosResponse } from 'axios';


@Component({
  selector: 'app-modificar-gato',
  templateUrl: './modificar-gato.component.html',
  styleUrls: ['./modificar-gato.component.css']
})
export class ModificarGatoComponent {

  constructor(private gatoService: GatoService, private route: ActivatedRoute, 
    public formBuilder: FormBuilder, public router: Router) {

    this.route.params.subscribe(params => {
      this.displayinfo(parseInt(params['id']));
      console.log(this.gato)

    })
    console.log("entre al constructor")
  }


  ngOnInit() {
    console.log(this.gato)
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

  async displayinfo(id: number) {
    this.gato = (await this.gatoService.findById(id)).data;
  }

  onSubmit(form:any) {
    this.gato = Object.assign({}, this.gato);
    console.log(this.gato);
    this.gatoService.update(this.gato);
    this.router.navigate(['/mascotas']);
  }
}