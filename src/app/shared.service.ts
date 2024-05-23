// shared.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  mostrarOcultar = false;
  muestraOculta = false;
  salir = false;

  constructor() { }
}
