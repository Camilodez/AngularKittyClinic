import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gato} from 'src/app/models/gato.model';
import axios, { AxiosResponse } from 'axios';
@Injectable({
  providedIn: 'root'
})
export class GatoService {
  update(gato: Gato): Promise<AxiosResponse<Gato>> {  
    return axios.put(`http://localhost:8090/mascota/update/${gato.id}`, gato);
  }

  constructor(
    private http: HttpClient
  ) { }

  findAll():Observable<Gato[]>{
    return this.http.get<Gato[]>("http://localhost:8090/mascota/lista");
  }

  FindById(id:number):Observable<Gato>{
   
    return this.http.get<Gato>("http://localhost:8090/mascota/gato/"+id);;
  }

  
  findById(id: number): Promise<AxiosResponse<Gato>> {
    return axios.get(`http://localhost:8090/mascota/gato/${id}`);
  }

  cambiarEstado(id: number): Observable<any> {
    return this.http.put(`http://localhost:8090/mascota/estado/${id}`, null);
  }


  save(gato: Gato): Promise<Gato> {
    return axios.post("http://localhost:8090/mascota/agregar", gato);
  }

  delete(id:number){
    this.http.delete("http://localhost:8090/mascota/gato/"+id).subscribe();
  }

  mascotaActivo(){
    return this.http.get<number>('http://localhost:8090/mascota/activos');
}

  mascotaTotal(){
    return this.http.get<number>('http://localhost:8090/mascota/total');
  }

  
}