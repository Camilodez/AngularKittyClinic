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
export class LoginuserComponent implements OnInit{


  sidebarVisible: boolean = false;

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }


  constructor(private route: ActivatedRoute, 
    private usuarioService: UsuarioService,
    private sharedService: SharedService) { 
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

    this.sharedService.mostrarOcultar = false;
  }
}