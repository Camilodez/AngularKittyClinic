import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { Gato } from '../models/gato.model';
import axios, { AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl = 'http://localhost:8090';


  constructor(private http: HttpClient) { }

  buscarPorId(id: number): Observable<Gato[]> {
    return this.http.get<Gato[]>('http://localhost:8090/cliente/misgatos/'+id);
  }

  buscarPorIdAxios(id: number): Promise<AxiosResponse<Usuario>> {
    return axios.get(`http://localhost:8090/cliente/usuario/${id}`);
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
    return this.http.delete(`${'http://localhost:8090/cliente/delete'}/${id}`);
  }

  login(cedula: number): Observable<Usuario> {
    return this.http.post<Usuario>('http://localhost:8090/cliente/cedula',  cedula );
  }
  
   findbyCedula(cedula: number): Promise<AxiosResponse<Usuario>> {
    return  axios.get("http://localhost:8090/cliente/cedula/"+cedula);
  }

  UsuarioHome(): Observable<Usuario> {
    return  this.http.get<Usuario>("http://localhost:8090/cliente/details");
  }





}

export { Usuario };