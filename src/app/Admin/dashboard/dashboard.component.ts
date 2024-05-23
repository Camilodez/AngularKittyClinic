import { Component, OnInit } from '@angular/core';
import { GatoService } from 'src/app/services/gato.service';
import { VeterinarioService } from 'src/app/services/veterinario.service';
import { DrogaService } from 'src/app/services/droga.service';
import { SharedService } from 'src/app/shared.service';
import { AdminService } from 'src/app/services/admin.service';
import { Admin } from 'src/app/models/admin.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  cantiVetiActi: any;
  cantiVetiInacti: any;
  cantiMascoActi: any;
  cantiMascoTotal: any;
  ventasTot: any;
  ganancias:any;
  tratamientosUlti: any;
  tratamientos: any;

  constructor(
    private veterinarioService: VeterinarioService,
    private drogaService: DrogaService,
    private gatoService: GatoService,
    private sharedService: SharedService,
    private adminService: AdminService
  ) { }


  isAdmin = false

  admin! : Admin

  ngOnInit(): void {
    this.cargarDatos();
    
    this.adminService.adminDetails().subscribe((data) => {
      this.admin = data;
      console.log(this.admin);
      this.isAdmin = true;  
    })

  }

  cargarDatos(){
    this.veterinarioService.veterinariosActivo().subscribe((data) => {
      this.cantiVetiActi = data;
    });

    this.veterinarioService.veterinariosInactivo().subscribe((data) => {
      this.cantiVetiInacti = data;
    });

    this.gatoService.mascotaActivo().subscribe((data) => {
      this.cantiMascoActi = data;
    });

    this.gatoService.mascotaTotal().subscribe((data) => {
      this.cantiMascoTotal = data;
    });

    this.drogaService.ventasTotales().subscribe((data) => {
      this.ventasTot = data;
    });

    this.drogaService.ganancia().subscribe((data) => {
      this.ganancias = data;
    });

    this.drogaService.tratamientosUltimos().subscribe((data) => {
      this.tratamientosUlti = data;
    });

    this.drogaService.tratamientosCanti().subscribe((data) => {
      this.tratamientos = data;
      console.log(this.tratamientos);
    });
    

    this.drogaService.tratamientosCanti().subscribe((data) => {
      this.tratamientos = data;

      // Lista para almacenar element[0]
      const listaElement0: any[] = this.tratamientos.map(
        (element: any) => element[0]
      );

      // Lista para almacenar element[1]
      const listaElement1: any[] = this.tratamientos.map(
        (element: any) => element[1]
      );
      
    });

    this.sharedService.mostrarOcultar = true;
  }


}
