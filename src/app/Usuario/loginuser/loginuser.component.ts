import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Gato } from 'src/app/models/gato.model';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {

  sidebarVisible: boolean = false;

  constructor(
    private route: ActivatedRoute, 
    private usuarioService: UsuarioService,
    private sharedService: SharedService
  ) { }

  listaMascotas: Gato[] = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const cedula = params.get('cedula')!;  // Operador de aserción no nulo
      
      this.usuarioService.buscarPorCedula(cedula).subscribe(
        (llegaCliente) => {
          console.log(llegaCliente);
          this.listaMascotas = llegaCliente;
        }
      );
    });

    this.sharedService.mostrarOcultar = false;
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
