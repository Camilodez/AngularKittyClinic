// tratamiento.model.ts
export interface Tratamiento {
  id: number;
  fecha: string;
  droga: number;  // Relación con Droga
  veterinario: number;  // Relación con Veterinario
  felino: number;  // Relación con Gato
}