import { Injectable } from '@angular/core';
import { Gato } from '../models/gato.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GatoService {

  
  private baseUrl = 'http://localhost:8090/mascota';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Gato[]> {
    return this.http.get<Gato[]>(`${this.baseUrl}/lista`);
  }

  findById(id: number): Observable<Gato> {
    return this.http.get<Gato>(`${this.baseUrl}/gato/${id}`);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

  updateEstado(id: number): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/estado/${id}`, id );
}

  getEstado(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/estado/${id}`);
  }

  save(gato: Gato): Observable<Gato> {
    return this.http.post<Gato>(`${this.baseUrl}/agregar`, gato);
  }

  update(gato: Gato): Observable<Gato> {
    return this.http.put<Gato>(`${this.baseUrl}/update/${gato.id}`, gato);
  }

  
  modificarGato(id: number, gato: Gato): Observable<Gato> {
    return this.http.put<Gato>(`${this.baseUrl}/update/${id}`, gato);
  }

  setEstado(estado: boolean, gato: Gato) {
    gato.estado = estado;
  }


}

