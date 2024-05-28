import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/models/admin.model';
import { Veterinario } from 'src/app/models/veterinario.model';
import { AdminService } from 'src/app/services/admin.service';
import { VeterinarioService } from 'src/app/services/veterinario.service';

@Component({
  selector: 'app-modificar-veterinario',
  templateUrl: './modificar-veterinario.component.html',
  styleUrls: ['./modificar-veterinario.component.css']
})
export class ModificarVeterinarioComponent implements OnInit {
  constructor(
    private veterinarioService: VeterinarioService,
    private route: ActivatedRoute,
    private router: Router,
    private adminService: AdminService
  ) { }


  admin!: Admin
  isAdmin = false
  veterinario!: Veterinario

  id: number | undefined

  ngOnInit() {
    
    this.route.params.subscribe(params => {
      this.id = +params['id']; // Obtén el parámetro 'id' de la URL
      console.log("ID recibido:", this.id.toString());
      this.displayInfo(this.id); // Muestra el ID en la consola (o úsalo según tu necesidad)
    });

    this.adminService.adminDetails().subscribe(
      (data) => {
        this.admin = data;
        console.log(this.admin);
        this.isAdmin = true;
      },
      (error) => {
        console.error('An error occurred:', error);
        this.router.navigate(['/admin-access-4f5e9d90-93e0-4c6b-88b1-711454a5b611']);
      }
    );
  }



  onSubmit(form: any) {
    this.veterinario = { ...this.veterinario, ...form.value };
    this.adminService.updateVet(this.veterinario).subscribe({
      next: (response) => {
        console.log('Veterinario actualizado', response);
        this.router.navigate(['/veterinarios']);
      },
      error: (error) => {
        console.error('Error al actualizar el veterinario', error);
      }
    });
  }

  displayInfo(id : number){
    this.adminService.findVetById(id).subscribe(
      (data) => {
        this.veterinario = data;
        console.log('Veterinario:', this.veterinario);
      },
      (error) => {
        console.error('An error occurred:', error);
      }
    )
  } 

}
