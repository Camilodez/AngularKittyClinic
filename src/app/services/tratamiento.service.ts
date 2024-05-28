import { Injectable } from '@angular/core';
import { Tratamiento } from '../models/tratamiento.model';
import axios, { AxiosResponse } from "axios";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EnviarTratamiento } from '../models/enviartrat.model';

@Injectable({
  providedIn: 'root'
})
export class TratamientoService {

  constructor(private http: HttpClient) { }


  private baseURL = 'http://localhost:8090/tratamiento';
  private baseUrl = 'http://localhost:8090/tratamiento';

  TratamientosVet(id : number): Promise<AxiosResponse<Tratamiento>> {
    return axios.get(`http://localhost:8090/tratamiento/veterinario/${id}`);
  }

  TratamientoGato(id : number): Promise<AxiosResponse<Tratamiento>> {
    return axios.get(`http://localhost:8090/tratamiento/gato/${id}`);
  }

  ObtenerTratamientosGato(id: number): Observable<Tratamiento[]> {
    return this.http.get<Tratamiento[]>(`http://localhost:8090/tratamiento/gato/${id}`);
  }

  obtenerTratamientosVet(id: number) {
    return this.http.get<Object[]>(`http://localhost:8090/tratamiento/informacion/veterinario/${id}`);
  }

  agregarTratamiento(tratamiento: EnviarTratamiento): Promise<EnviarTratamiento> {
      return axios.post(`http://localhost:8090/tratamiento/agregar`,tratamiento);
  }
}
