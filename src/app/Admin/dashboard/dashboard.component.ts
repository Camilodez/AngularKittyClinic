import { Component, OnInit } from '@angular/core';
import { GatoService } from 'src/app/services/gato.service';
import { VeterinarioService } from 'src/app/services/veterinario.service';
import { DrogaService } from 'src/app/services/droga.service';

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

  constructor(
    private veterinarioService: VeterinarioService,
    private drogaService: DrogaService,
    private gatoService: GatoService
  ) { }


  ngOnInit(): void {
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

  }
}
