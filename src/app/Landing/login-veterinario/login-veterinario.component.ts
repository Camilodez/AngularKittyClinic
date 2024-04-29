import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Veterinario } from 'src/app/models/veterinario.model';
import { VeterinarioService } from 'src/app/services/veterinario.service';

@Component({
  selector: 'app-login-veterinario',
  templateUrl: './login-veterinario.component.html',
  styleUrls: ['./login-veterinario.component.css']
})
export class LoginVeterinarioComponent {

  constructor(private veterinarioService: VeterinarioService,private router: Router) { } 

  vet: Veterinario | null = null;


async loginVet(correo: string, password: string) {

  this.vet = await this.veterinarioService.login(correo, password);
  
  if(this.vet!=null){
    console.log(this.vet);
    sessionStorage.setItem("veterinario", JSON.stringify(this.vet));
    this.router.navigate(["/mascotas"]);
  }
  else{
    console.log("Credenciales incorrectas");
  }
}

correo!: string;
password!: string;

}
