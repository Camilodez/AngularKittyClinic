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
}
