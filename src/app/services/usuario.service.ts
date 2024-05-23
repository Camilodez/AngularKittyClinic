import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { Gato } from '../models/gato.model';
import axios, { AxiosResponse } from 'axios';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl = 'http://localhost:8090';
  private baseUrls = 'http://localhost:8090/cliente';


  constructor(private http: HttpClient) { }

  buscarPorId(id: number): Observable<Gato[]> {
    return this.http.get<Gato[]>('http://localhost:8090/cliente/misgatos/'+id);
  }

  buscarPorIdAxios(id: number): Promise<AxiosResponse<Usuario>> {
    return axios.get(`http://localhost:8090/cliente/usuario/${id}`);
  }

  buscarPorCedula(cedula: string): Observable<Gato[]> {
    return this.http.get<Gato[]>(`${this.baseUrls}/misgatos/${cedula}`);
  }

  findAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('http://localhost:8090/cliente/lista');
  }

  actualizar(usuario: Usuario): Promise<AxiosResponse<Usuario>> {
    return axios.put<Usuario>(`${'http://localhost:8090/cliente/update'}/${usuario.id}`, usuario);
  }

 
  agregar(usuario: Usuario): Promise<Usuario> {
    return axios.post('http://localhost:8090/cliente/agregar', usuario);
  }

  eliminarPorId(id: number): Observable<any> {
    return this.http.delete('http://localhost:8090/cliente/delete/' + id);
  }

  login(user: User): Observable<string> {
    return this.http.post(this.baseUrls + '/login', user, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text'
    });
  }
  
   findbyCedula(cedula: number): Promise<AxiosResponse<Usuario>> {
    return  axios.get("http://localhost:8090/cliente/cedula/"+cedula);
  }


  UsuarioHome(): Observable<Usuario> {
    return  this.http.get<Usuario>("http://localhost:8090/cliente/details");
  }

}

export { Usuario };