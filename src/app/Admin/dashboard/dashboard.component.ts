import { Component, OnInit } from '@angular/core';
import { GatoService } from 'src/app/services/gato.service';
import { VeterinarioService } from 'src/app/services/veterinario.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  cantiVetiActi: any;
  cantiVetiInacti: any;
  cantiMascoActi: any;
  cantiMascoInacti: any;

  constructor(
    private veterinarioService: VeterinarioService,
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

    this.gatoService.mascotaInactivo().subscribe((data) => {
      this.cantiMascoInacti = data;
    });

  }
}
