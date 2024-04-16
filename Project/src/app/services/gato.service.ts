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

  async deletebyId(id: number) {
    try{
      const response: AxiosResponse = await axios.delete(`http://localhost:8090/mascota/delete/${id}`);
      console.log(response);
    }
    catch(error){
      console.error(error);
    }
  }

  save(gato: Gato): Promise<AxiosResponse<Gato>> {
    return axios.post('http://localhost:8090/mascota/agregar', gato);
  }
  update(gato: Gato): Promise<AxiosResponse<Gato>> {  
    return axios.put(`http://localhost:8090/mascota/update/${gato.id}`, gato);
  }
}

