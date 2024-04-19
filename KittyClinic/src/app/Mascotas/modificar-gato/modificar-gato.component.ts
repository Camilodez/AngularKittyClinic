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

   
  }



}