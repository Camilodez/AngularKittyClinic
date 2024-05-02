import { Droga } from "./droga.model";
import { Gato } from "./gato.model";
import { Veterinario } from "./veterinario.model";

export interface EnviarTratamiento {
    id: number;
    fecha: string;
    droga?: Droga;  // Relación con Droga
    veterinario?: Veterinario;  // Relación con Veterinario
    felino?: Gato;  // Relación con Gato
  }