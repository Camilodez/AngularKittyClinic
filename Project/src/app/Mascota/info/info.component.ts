import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GatoService } from '../../services/gato.service';
import { Gato } from '../../models/gato.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  gatoForm: FormGroup;
  gato: Gato;

  constructor(
    private gatoService: GatoService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    // Initialize the form
    this.gatoForm = this.formBuilder.group({
      nombre: [''],
      raza: [''],
      edad: [''],
      foto: ['']
    });

    // Subscribe to route params to get the cat id
    this.route.params.subscribe(params => {
      const id = parseInt(params['id'], 10);
      if (id) {
        this.displayInfo(id);
      }
    });

    // Initialize the gato with default values
    this.gato = {
      id: 0,
      nombre: '',
      raza: '',
      edad: 0,
      foto: '',
      enfermedad: '',
      estado: true,
    };
  }

  ngOnInit(): void {
    // The form will be patched with the cat details once they are loaded
  }

  displayInfo(id: number): void {
    this.gatoService.findById(id).subscribe({
      next: (gato: Gato) => {
        this.gato = gato;
        this.gatoForm.patchValue(this.gato); // Patch the form when data is available
      },
      error: (error) => {
        console.error('Error fetching gato details:', error);
      }
    });
  }

  onSubmit(): void {
    // Implement form submission logic here
    console.log('Form submitted', this.gatoForm.value);
  }
}
