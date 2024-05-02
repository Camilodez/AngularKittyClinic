import { Tratamiento } from './tratamiento.model';

export interface Droga {
    id: number;
    nombre: string;
    uDisponibles: number;
    uVendidas: number;
    precio: number;
    pCompra: number;
    tratamientos?: Tratamiento[];  
}