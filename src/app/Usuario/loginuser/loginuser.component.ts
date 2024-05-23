import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario, UsuarioService } from 'src/app/services/usuario.service';
import { Gato } from 'src/app/models/gato.model';
import axios from 'axios';
import { SharedService } from 'src/app/services/shared.service';

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
    private sharedService: SharedService,
    private router: Router
  ) { }

  isAdmin = false

  listaMascotas: Gato[] = [];

  cliente!:Usuario

  ngOnInit(): void {

    const token = localStorage.getItem('token');
    if (token) {
      this.isAdmin = true;
    }

    this.route.params.subscribe(params => {
      const userId = +params['id']; // El signo + convierte la cadena a número
      console.log("ID recibido: " + userId); // Para verificar que el ID se ha extraído correctamente

      this.cargarFelinos(userId.toString());
    });


      this.usuarioService.UsuarioHome().subscribe(
        (data) => {
          this.cliente = data;

          console.log("Cliente llega:" + this.cliente);
          this.cargarMascotas();
        },
        (error) => {
          console.error('Error al cargar el cliente', error);
          this.router.navigate(['/login']);

        }
      );

    this.sharedService.mostrarOcultar = false;
    this.sharedService.salir = true;
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

  cargarFelinos(id: string) {
    this.usuarioService.encontrarPorCedula(id).subscribe(
      (llegaFelinos) => {
        this.cliente = llegaFelinos;
        console.log("Cliente que llega " + this.cliente);
        this.cargarMascotas();
      }
    )
  }


}
