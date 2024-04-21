import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Veterinario } from "../models/veterinario.model";
import { Observable } from "rxjs";
import axios, { AxiosResponse } from "axios";
@Injectable({
    providedIn: 'root'
  })


export class VeterinarioService {



    constructor(private http: HttpClient) { }

    findAll(): Observable<Veterinario[]> {
        return this.http.get<Veterinario[]>('http://localhost:8090/admin/veterinario');
    }

    add(veterinario: Veterinario): Observable<Veterinario> {
        return this.http.post<Veterinario>('http://localhost:8090/admin/agregar/veterinario', veterinario);
    }

    save(veterinario: Veterinario): Promise<Veterinario> {
        return axios.post('http://localhost:8090/admin/agregar', veterinario);
      }


      searchbyId(id: number):Promise<AxiosResponse<Veterinario>> {
        return axios.get<Veterinario>(`http://localhost:8090/admin/veterinario/${id}`);
      }
    

    update(veterinario:Veterinario): Observable<Veterinario> {
        return this.http.put<Veterinario>('http://localhost:8090/admin/update/veterinario', veterinario);
    }

    delete(id: number): Observable<Veterinario> {
        return this.http.delete<Veterinario>(`http://localhost:8090/admin/delete/${id}`);
    }
    
}