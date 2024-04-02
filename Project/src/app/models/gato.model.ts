// gato.model.ts
import { Usuario } from './usuario.model';
import { Tratamiento } from './tratamiento.model';

export interface Gato {
  id?: number;
  nombre: string;
  raza: string;
  edad: number;
  foto: string;
  usuario?: Usuario;  // Relación con Usuario
  tratamientos?: Tratamiento[];  // Relación con Tratamientos
}