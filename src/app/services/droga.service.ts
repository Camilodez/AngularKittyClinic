import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Droga } from '../models/droga.model';
import { Observable } from "rxjs";
import axios, { AxiosResponse } from "axios";

@Injectable({
  providedIn: 'root'
})
export class DrogaService {



  constructor(private http: HttpClient) { }

  ventasTotales(){
    return this.http.get<number>('http://localhost:8090/droga/ventas_totales');
  }

  ganancia(){
    return this.http.get<number>('http://localhost:8090/droga/ganancias');
  }

  tratamientosUltimos(){
    return this.http.get<number>('http://localhost:8090/tratamiento/realizados');
  }

  tratamientosCanti(){
    return this.http.get<Object[]>('http://localhost:8090/tratamiento/por_droga');
  }

  drogas(): Observable<string[]>{
    return this.http.get<string[]>('http://localhost:8090/droga/nombre');
  }

  drogaNombre(droga: string): Promise<AxiosResponse<Droga>>{
    return axios.get(`http://localhost:8090/droga/nombre/${droga}`);
  }


}
