import { Injectable } from '@angular/core';
import { Gato } from '../models/gato.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GatoService {

  constructor(
    private http: HttpClient
  ) {}
 



  findAll():Observable<Gato[]>{
    return this.http.get<Gato[]>('http://localhost:8090/muestra/lista');
  }

  findById(id: number): Observable <Gato> {

    return this.http.get<Gato>('http://localhost:8090/muestra/gato/'+id);
  }

  
}

