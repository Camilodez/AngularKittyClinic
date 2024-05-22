import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TratamientoService } from 'src/app/services/tratamiento.service';
import { GatoService } from 'src/app/services/gato.service';
import { Tratamiento } from 'src/app/models/tratamiento.model';
import { Gato } from 'src/app/models/gato.model';
import { SharedService } from 'src/app/shared.service'; // Import SharedService

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  MuestrarOculta = false;
  isVeterinario = false;
  ultimaFechaTratamiento: any;
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
  tratamientos: Tratamiento[] = [];

  constructor(
    private gatoService: GatoService, 
    private route: ActivatedRoute, 
    private tratamientoService: TratamientoService, 
    public formBuilder: FormBuilder,
    public sharedService: SharedService // Inject SharedService
  ) {
    this.route.params.subscribe(params => {
      this.displayinfo(parseInt(params['id'], 10));
    });

    this.gatoForm = this.formBuilder.group({
      nombre: [''],
      raza: [''],
      edad: [''],
      foto: ['']
    });
  }

  async ngOnInit() {
    this.route.params.subscribe(async params => {
      const id = +params['id'];
      this.gato = (await this.gatoService.findById(id)).data;
      this.gatoForm.patchValue(this.gato);
      this.obtenerTratamientosGato(id);
    });
  }

  async displayinfo(id: number) {
    this.gato = (await this.gatoService.findById(id)).data;
  }

  obtenerTratamientosGato(id: number) {
    this.tratamientoService.ObtenerTratamientosGato(id).subscribe(
      (data: Tratamiento[]) => {
        console.log(data);  // Check what data you are receiving here
        this.tratamientos = data;
        this.ultimaFechaTratamiento = this.obtenerUltimaFecha(data);
      },
      (error) => {
        console.error('Error al obtener los tratamientos', error);
      }
    );
  }

  obtenerUltimaFecha(tratamientos: Tratamiento[]): string {
    if (!tratamientos.length) return '';  // Ensure there are treatments before processing
    const ultimaFecha = tratamientos.reduce((max, t) => t.fecha > max ? t.fecha : max, tratamientos[0].fecha);
    console.log('Última fecha calculada:', ultimaFecha);
    return ultimaFecha;
  }
}
