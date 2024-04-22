import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gato } from 'src/app/models/gato.model';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})


export class PerfilUsuarioComponent implements OnInit{

  constructor(private route: ActivatedRoute, private usuarioService: UsuarioService) { 
  }

  // cliente!: Usuario;
  listaMascotas: Gato[] = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      
      this.usuarioService.buscarPorId(id).subscribe(
        (llegaCliente) => {
          console.log(llegaCliente);
          // this.cliente = llegaCliente; 
          this.listaMascotas = llegaCliente;
        }
      );
    });
  }
}