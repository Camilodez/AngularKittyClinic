import { Injectable } from '@angular/core';
import { Tratamiento } from '../models/tratamiento.model';
import axios, { AxiosResponse } from "axios";

@Injectable({
  providedIn: 'root'
})
export class TratamientoService {

  constructor() { }

  TratamientosVet(id : number): Promise<AxiosResponse<Tratamiento>> {
    return axios.get(`http://localhost:8090/tratamiento/veterinario/${id}`);
  }

  TratamientoGato(id : number): Promise<AxiosResponse<Tratamiento>> {
    return axios.get(`http://localhost:8090/tratamiento/gato/${id}`);
  }

}
