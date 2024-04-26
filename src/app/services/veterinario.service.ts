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

    findAll(): Promise<AxiosResponse<Veterinario[]>> {
        return axios.get('http://localhost:8090/admin/veterinario');
    }

    add(veterinario: Veterinario): Observable<Veterinario> {
        return this.http.post<Veterinario>('http://localhost:8090/admin/agregar/veterinario', veterinario);
    }

    save(veterinario: Veterinario): Promise<Veterinario> {
        return axios.post('http://localhost:8090/admin/agregar', veterinario);
      }


    searchbyId(id: number):Promise<AxiosResponse<Veterinario>> {
      return axios.get(`http://localhost:8090/admin/veterinario/${id}`);
    }
    

    update(veterinario:Veterinario): Observable<Veterinario> {
        return this.http.put<Veterinario>('http://localhost:8090/admin/update/veterinario', veterinario);
    }

    delete(id: number){
        return this.http.delete(`http://localhost:8090/admin/delete/${id}`);
    }

    veterinariosActivo(){
        return this.http.get<number>('http://localhost:8090/admin/veterinario/activos/count');
    }

    veterinariosInactivo(){
        return this.http.get<number>('http://localhost:8090/admin/veterinario/inactivos/count');
    }

    cambiarEstado(id: number): Observable<any> {
        return this.http.put(`http://localhost:8090/admin/estado/${id}`, null);
      }
    


}