import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../models/admin.model';
import { Useradmin } from '../models/useradmin';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario.service';
import { Veterinario } from '../models/veterinario.model';

@Injectable({
    providedIn: 'root'
})


export class AdminService {

    constructor(private http: HttpClient
    ) { }


    loginAdmin(user:Useradmin): Observable<String>{
        return this.http.post('http://localhost:8090/admin/login', user,{
            responseType: 'text'
        });
    }

    adminDetails(): Observable<Admin>{
        return this.http.get<Admin>('http://localhost:8090/admin/details');
    }

    findVetById(id: number): Observable<Veterinario>{
        return this.http.get<Veterinario>('http://localhost:8090/admin/findVet/' + id);
    }

    updateVet(veterinario:Veterinario): Observable<Veterinario>{
        return this.http.put<Veterinario>('http://localhost:8090/admin/actualizar/veterinario', veterinario);
    }

}