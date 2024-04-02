import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Mascota } from './mascota.model'; // Asume que tienes un modelo de Mascota

@Injectable({
  providedIn: 'root'
})
export class MascotasService {
  private mascotasMock: Mascota[] = [
    { id: 1, nombre: 'Fido', tipo: 'Perro', edad: 5 },
    { id: 2, nombre: 'Whiskers', tipo: 'Gato', edad: 3 }
  ];

  constructor() { }

  getMascotas(): Observable<Mascota[]> {
    return of(this.mascotasMock);
  }

  // Puedes agregar aquí métodos mock para crear, actualizar y eliminar mascotas
}
