import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tratamiento } from 'src/app/models/tratamiento.model';
import { Veterinario } from 'src/app/models/veterinario.model';
import { TratamientoService } from 'src/app/services/tratamiento.service';
import { VeterinarioService } from 'src/app/services/veterinario.service';

@Component({
  selector: 'app-login-veterinario',
  templateUrl: './login-veterinario.component.html',
  styleUrls: ['./login-veterinario.component.css']
})
export class LoginVeterinarioComponent {

  constructor(private veterinarioService: VeterinarioService,private router: Router,private tratamientoService: TratamientoService) { } 

  vet: Veterinario | null = null;

  trat: Tratamiento | null = null;


async loginVet(correo: string, password: string) {

  
  this.vet = await this.veterinarioService.login(correo, password);

  this.trat = (await (this.tratamientoService.TratamientosVet(this.vet!.id))).data;
  
  if(this.vet!=null){
    console.log(this.vet);
    console.log("Tratamiento: ",this.trat);
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
