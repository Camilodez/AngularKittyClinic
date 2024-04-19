import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gato} from 'src/app/models/gato.model';
import axios, { AxiosResponse } from 'axios';
@Injectable({
  providedIn: 'root'
})
export class GatoService {
  update(gato: Gato) {
    throw new Error('Method not implemented.');
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

  cambiarEstado(id:number){
   
  }

  findById(id: number): Promise<AxiosResponse<Gato>> {
    return axios.get(`http://localhost:8090/mascota/gato/${id}`);
  }


  save(gato:Gato){
    return this.http.post("http://localhost:8090/mascota/gato",gato).subscribe(); 
  }

  delete(id:number){
    this.http.delete("http://localhost:8090/mascota/gato/"+id).subscribe();
  }
  

  
}