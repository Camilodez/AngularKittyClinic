import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent {


  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.sharedService.mostrarOcultar = false;
    this.sharedService.salir = false;
  }

}
