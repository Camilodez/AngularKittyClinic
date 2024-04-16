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

    this.gatoForm = this.formBuilder.group({
      nombre: [''],
      raza: [''],
      edad: [''],
      foto: ['']
    })

  }


  ngOnInit() {
    this.gatoForm.patchValue(this.gato);
    console.log(this.gato)
  }

  gatoForm!: FormGroup;

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
    try{
    const response: AxiosResponse = await axios.get(`http://localhost:8090/mascota/gato/${id}`);
     console.log(response);
    this.gato = response.data;
    }
    catch(error){
      console.error(error);
    }
  }

  onSubmit() {

  }
}