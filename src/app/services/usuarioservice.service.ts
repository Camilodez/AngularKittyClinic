import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { Gato } from '../models/gato.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl = 'http://localhost:8090'; 

  constructor(private http: HttpClient) { }

  buscarPorId(id: number): Observable<Gato[]> {
    return this.http.get<Gato[]>('http://localhost:8090/cliente/misgatos/'+id);
  }

  findAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('http://localhost:8090/cliente/login');
  }

  actualizar(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${'http://localhost:8090'}/${usuario.id}`, usuario);
  }

  agregar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${'http://localhost:8090'}`, usuario);
  }

  eliminarPorId(id: number): Observable<any> {
    return this.http.delete(`${'http://localhost:8090'}/${id}`);
  }

  login(cedula: number): Observable<Usuario> {
    return this.http.post<Usuario>(`${'/http://localhost:8090'}/${cedula}`, cedula);
  }
}

export { Usuario };
