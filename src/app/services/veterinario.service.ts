import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Veterinario } from "../models/veterinario.model";
import { Observable } from "rxjs";
import axios, { AxiosResponse } from "axios";
import { User } from "../models/user";
import { Uservet } from "../models/uservet";
@Injectable({
    providedIn: 'root'
  })


export class VeterinarioService {

    private URL: string = "http://localhost:8090/admin"

    private baseUrl = 'http://localhost:8090/veterinario';



    constructor(private http: HttpClient) { }

    findAll(): Promise<AxiosResponse<Veterinario[]>> {
        return axios.get(`http://localhost:8090/veterinario/veterinario`);
    }

    findAllVets(): Observable<Veterinario[]> {
        return this.http.get<Veterinario[]>('http://localhost:8090/veterinario/veterinario');
    }

    add(veterinario: Veterinario): Observable<Veterinario> {
        return this.http.post<Veterinario>('http://localhost:8090/veterinario/agregar', veterinario);
    }

    save(veterinario: Veterinario): Promise<Veterinario> {
        return axios.post('http://localhost:8090/veterinario/agregar', veterinario);
      }


      searchbyId(id: number): Observable<Veterinario> {
        return this.http.get<Veterinario>(`${this.baseUrl}/find/${id}`);
      }

      searchByCorreo(correo: string): Observable<Veterinario> {
        return this.http.get<Veterinario>(`${this.baseUrl}/find/${correo}`);
      }


    findById(id: number): Observable<Veterinario> {
        return this.http.get<Veterinario>(`http://localhost:8090/veterinario/find/${id}`);
        
    }
    
    update(veterinario:Veterinario): Observable<Veterinario> {
        return this.http.put<Veterinario>('http://localhost:8090/veterinario/actualizar/veterinario', veterinario);
    }

    delete(correo: string): Observable<any> {
      return this.http.delete(`${this.baseUrl}/delete/${correo}`);
    }

    veterinariosActivo(){
        return this.http.get<number>('http://localhost:8090/veterinario/veterinario/activos/count');
    }

    veterinariosInactivo(){
        return this.http.get<number>('http://localhost:8090/veterinario/veterinario/inactivos/count');
    }

    cambiarEstado(correo: string): Observable<any> {
      return this.http.put(`${this.baseUrl}/estado/${correo}`, null);
    }

      login(user: Uservet): Observable<string> {
        return this.http.post(`${this.baseUrl}/login`, user, {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
          responseType: 'text' // Asegúrate de que la respuesta se maneje como texto
        });
      }

    veterinarioHome(): Observable<Veterinario> {
        return this.http.get<Veterinario>('http://localhost:8090/veterinario/details');
    }
  
}