// tratamiento.model.ts
import { Droga } from './droga.model';
import { Veterinario } from './veterinario.model';
import { Gato } from './gato.model';

export interface Tratamiento {
  id?: number;
  fecha: string;
  droga?: Droga;  // Relación con Droga
  veterinario?: Veterinario;  // Relación con Veterinario
  felino?: Gato;  // Relación con Gato
}
