import { Component } from '@angular/core';
import { GatoService } from '../../service/gato.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Gato } from '../../models/gato.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {

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

  displayinfo(id: number) {
   
  }

  onSubmit() {
  
  }

}

