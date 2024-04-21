import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario} from 'src/app/models/usuario.model';


@Injectable({
    providedIn: 'root'
  })
  export class UsuarioService {

    constructor(private http: HttpClient) { }



      findAll():Observable<Usuario[]>{
        return this.http.get<Usuario[]>("http://localhost:8090/cliente/lista");
      }

      SearchUser(id:number):Observable<Usuario>{
        return this.http.get<Usuario>("http://localhost:8090/cliente/misgatos/"+id);
      }

      




  }