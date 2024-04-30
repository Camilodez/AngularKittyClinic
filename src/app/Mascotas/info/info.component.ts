import { Component } from '@angular/core';
import { Gato } from '../../models/gato.model';
import { GatoService } from 'src/app/services/gato.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TratamientoService } from 'src/app/services/tratamiento.service';
import { Tratamiento } from 'src/app/models/tratamiento.model';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {

  constructor(private gatoService: GatoService, private route: ActivatedRoute, private tratamientoService: TratamientoService, 
    public formBuilder: FormBuilder, public router: Router, ) {

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

  tratamientos: Tratamiento[] = [];
  
  gatoForm!: FormGroup;

  gato: Gato = {
    id: 0,
    nombre: '',
    raza: '',
    edad: 0,
    foto: '',
    enfermedad: '',
    estado: true,
    usuario: undefined,
    tratamientos: []
  };

  async displayinfo(id: number) {
    this.gato = (await this.gatoService.findById(id)).data;
  }

  cargarTratamientos(): void {
    this.tratamientoService.ObtenerTratamientosGato(this.gato.id).subscribe({
      next: (data) => {
        this.tratamientos = data;
      },
      error: (e) => console.error(e)
    });
  }
}