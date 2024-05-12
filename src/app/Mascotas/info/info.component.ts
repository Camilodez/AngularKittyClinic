import { Component, OnInit } from '@angular/core';
import { Gato } from '../../models/gato.model';
import { GatoService } from 'src/app/services/gato.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TratamientoService } from 'src/app/services/tratamiento.service';
import { Tratamiento } from 'src/app/models/tratamiento.model';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit{

  MuestrarOculta = false;
  isVeterinario: boolean = false;

  private currentUser: any;
  ultimaFechaTratamiento: any;

  


  constructor(private gatoService: GatoService, 
    private route: ActivatedRoute, 
    private tratamientoService: TratamientoService, 
    public formBuilder: FormBuilder, 
    public router: Router,
    public sharedService: SharedService) {

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

  async ngOnInit() {
    this.gatoForm.patchValue(this.gato);
    this.trat = (await this.tratamientoService.TratamientoGato(this.gato.id!)).data;
    console.log(this.gato)
    console.log("Tratamiento"+ this.trat)
    
    this.route.params.subscribe(params => {
      const id = +params['id']; // El '+' convierte el parámetro de string a número
      this.obtenerTratamientosGato(id);
    });
  }
  nombresDrogas: string[] = [];
  tratamientos: any[] = [];
  
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

  trat?: Tratamiento;



  async displayinfo(id: number) {
    this.gato = (await this.gatoService.findById(id)).data;
  }

  obtenerTratamientosGato(id: number) {
    this.tratamientoService.ObtenerTratamientosGato(id).subscribe(
      (data) => {
        console.log(data);  // Verifica qué estás recibiendo exactamente aquí
        this.tratamientos = data;
        this.ultimaFechaTratamiento = this.obtenerUltimaFecha(data);
      },
      (error) => {
        console.error('Error al obtener los tratamientos', error);
      }
    );
  }


  obtenerUltimaFecha(tratamientos: any[]): string {
    if (!tratamientos.length) return '';  // Asegura que haya tratamientos antes de procesar
    const ultimaFecha = tratamientos.reduce((max, t) => t[0] > max ? t[0] : max, tratamientos[0][0]);
    console.log('Última fecha calculada:', ultimaFecha);
    return ultimaFecha;
  }

}
