import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario, UsuarioService } from 'src/app/services/usuario.service';
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
    private usuarioService: UsuarioService,
    private sharedService: SharedService
  ) { }

  listaMascotas: Gato[] = [];

  cliente!:Usuario

  ngOnInit(): void {

      this.usuarioService.UsuarioHome().subscribe(
        (data) => {
          this.cliente = data;
          console.log("Cliente llega:" + this.cliente);
          this.cargarMascotas();
        }
      );

      
    
    this.sharedService.mostrarOcultar = false;
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  cargarMascotas() {
    this.usuarioService.buscarPorCedula(this.cliente.cedula).subscribe(
      (llegaCliente) => {
        console.log(llegaCliente);
        this.listaMascotas = llegaCliente;
      }
    );
  }
}
