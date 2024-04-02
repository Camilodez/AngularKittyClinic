import { Tratamiento } from './tratamiento.model';

export interface Veterinario {
    id?: number;
    cedula: number;
    nombre: string;
    apellido: string;
    password: string;
    foto: string;
    especialidad: string;
    tratamientos?: Tratamiento[];  // Relación con Tratamiento
  }