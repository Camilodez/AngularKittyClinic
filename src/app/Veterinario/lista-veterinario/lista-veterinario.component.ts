import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/admin.model';
import { Veterinario } from 'src/app/models/veterinario.model';
import { AdminService } from 'src/app/services/admin.service';
import { VeterinarioService } from 'src/app/services/veterinario.service';

@Component({
  selector: 'app-lista-veterinario',
  templateUrl: './lista-veterinario.component.html',
  styleUrls: ['./lista-veterinario.component.css']
})
export class ListaVeterinarioComponent implements OnInit {
  ListaVeterinarios: Veterinario[] = [];

  constructor(
    private veterinarioService: VeterinarioService,
    private router: Router,
    private adminService: AdminService
  ) {}

  admin!: Admin
  isAdmin = false

  ngOnInit(): void {
    this.adminService.adminDetails().subscribe(
      (data) => {
        this.admin = data;
        console.log(this.admin);
        this.isAdmin = true;  
        this.buscarVets();
      },
      (error) => {
        console.error('An error occurred:', error);
        this.router.navigate(['/admin-access-4f5e9d90-93e0-4c6b-88b1-711454a5b611']);
      }
    );
  }

  buscarVets() {
    this.veterinarioService.findAllVets().subscribe({
      next: (veterinarios) => {
        this.ListaVeterinarios = veterinarios;
      },
      error: (error) => {
        console.error('Error al cargar la lista de veterinarios', error);
      }
    });
  }

  Delete(correo: string): void {
    this.veterinarioService.delete(correo).subscribe({
      next: (resp) => {
        this.buscarVets(); // Volver a cargar la lista después de eliminar
      },
      error: (error) => {
        console.error('Error al eliminar el usuario', error);
      }
    });
  }

  CambiarEstado(correo: string): void {
    this.veterinarioService.cambiarEstado(correo).subscribe({
      next: (response) => {
        console.log('Estado cambiado exitosamente', response);
        this.buscarVets(); // Volver a cargar la lista después de cambiar el estado
      },
      error: (error) => {
        console.error('Error al cambiar el estado', error);
        window.location.reload();
      }
    });
  }
}
