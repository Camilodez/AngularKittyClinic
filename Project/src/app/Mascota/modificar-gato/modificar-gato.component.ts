import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GatoService } from '../../services/gato.service';
import { Gato } from '../../models/gato.model';

@Component({
  selector: 'app-modificar-gato',
  templateUrl: './modificar-gato.component.html',
  styleUrls: ['./modificar-gato.component.css']
})
export class ModificarGatoComponent implements OnInit {
  gatoForm: FormGroup;

  constructor(
    private gatoService: GatoService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    // Initialize the form
    this.gatoForm = this.formBuilder.group({
      id: 0,
      nombre: '',
      raza: '',
      edad: 0,
      foto: '',
      enfermedad: '',
      estado: true,
    });

    // Subscribe to route params to get the cat id
    this.route.params.subscribe(params => {
      const id = parseInt(params['id'], 10);
      if (id) {
        this.displayInfo(id);
      }
    });
  }

  ngOnInit(): void {}

  displayInfo(id: number): void {
    this.gatoService.findById(id).subscribe({
      next: (gato: Gato) => {
        this.gatoForm.patchValue(gato); // Patch the form with the received cat
      },
      error: (error) => {
        console.error('Error fetching gato details:', error);
      }
    });
  }

  onSubmit(): void {
    if (this.gatoForm.valid) {
      const updatedGato: Gato = this.gatoForm.value;
      this.gatoService.update(updatedGato).subscribe({
        next: () => {
          console.log('Gato updated successfully');
          this.router.navigate(['/mascotas']); // Navigate after successful update
        },
        error: (error) => console.error('Error updating gato', error)
      });
    }
  }
}
