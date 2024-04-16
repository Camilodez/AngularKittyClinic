import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
import { Gato } from '../models/gato.model';

@Injectable({
  providedIn: 'root'
})
export class GatoService {

  constructor() { }

  findAll(): Promise<AxiosResponse<Gato[]>> {
    return axios.get('http://localhost:8090/mascota/lista');
  }

  findById(id: number): Promise<AxiosResponse<Gato>> {
    return axios.get(`http://localhost:8090/mascota/gato/${id}`);
  }

  deletebyId(id: number): Promise<AxiosResponse<any>> {
    return axios.delete(`http://localhost:8090/delete/gato/${id}`);
  }

  save(gato: Gato): Promise<AxiosResponse<Gato>> {
    return axios.post('http://localhost:8090/mascota/agregar', gato);
  }
}

