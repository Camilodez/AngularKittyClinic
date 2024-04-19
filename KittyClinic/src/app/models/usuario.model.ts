import { Gato } from './gato.model';

export interface Usuario {
  id: number;
  nombre: string;
  genero: string;
  edad: number;
  cedula: number;
  correo: string;
  mascotas?: Gato[];  // Relación con Gato
}