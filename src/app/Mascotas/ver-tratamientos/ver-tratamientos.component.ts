import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/models/admin.model';
import { Tratamiento } from 'src/app/models/tratamiento.model';
import { Veterinario } from 'src/app/models/veterinario.model';
import { AdminService } from 'src/app/services/admin.service';
import { TratamientoService } from 'src/app/services/tratamiento.service';
import { VeterinarioService } from 'src/app/services/veterinario.service';

@Component({
  selector: 'app-ver-tratamientos',
  templateUrl: './ver-tratamientos.component.html',
  styleUrls: ['./ver-tratamientos.component.css']
})
export class VerTratamientosComponent implements OnInit {
  tratamientos: any[] = [];

  constructor(
    private tratamientoService: TratamientoService,
    private vetService: VeterinarioService,
    public router: Router,
    private adminService: AdminService,
    private route : ActivatedRoute
  ) {


  }

  id: number | undefined
  admin!: Admin
  isAdmin = false
  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = +params['id']; // Obtén el parámetro 'id' de la URL
      console.log("ID recibido:", this.id.toString()); // Muestra el ID en la consola (o úsalo según tu necesidad)
    });

    this.adminService.adminDetails().subscribe(
      (data) => {
        this.admin = data;
        console.log(this.admin);
        this.isAdmin = true;
        this.cargarVeterinario(this.id!);
      },
      (error) => {
        console.error('An error occurred:', error);
        this.vetService.veterinarioHome().subscribe(
          (vetData: any) => {
            this.vet = vetData;
            console.log("Veterinario recibido:", this.vet);
            this.cargarTratamientos();
          },
          (error) => {
            console.error('An error occurred:', error);
            this.router.navigate(['/login-veterinario']);
          }
        );
      }
    );


  }
  vet: Veterinario = {
    id: 0,
    cedula: 0,
    nombre: '',
    apellido: '',
    correo: '',
    password: '',
    foto: '',
    especialidad: '',
    estado: false
  };

  cargarTratamientos(): void {
    this.tratamientoService.obtenerTratamientosVet(this.vet.id).subscribe(
      (data) => {
        this.tratamientos = data;
        console.log('Tratamientos:', this.tratamientos);
      },
      (error) => {
        console.error('Error al cargar tratamientos', error);
      }
    );
  }

  cargarVeterinario(id: number): void {

    this.adminService.findVetById(id).subscribe(
      (data) => {
        this.vet = data;
        console.log('Veterinario:', this.vet);
        this.cargarTratamientos();
      },
      (error) => {
        console.error('Error al cargar veterinario', error);
      })
  }

}

