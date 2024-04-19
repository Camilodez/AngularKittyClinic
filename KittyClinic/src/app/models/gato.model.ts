import { Usuario } from './usuario.model';
import { Tratamiento } from './tratamiento.model';

export interface  Gato {

    id: number;
    nombre: string;
    raza: string;
    edad: number;
    foto: string ;
    enfermedad: string;
    estado: boolean;
    usuario: Usuario;  
    tratamientos: Tratamiento[];  
}