// header.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  MostrarOcultar = false;

  constructor(public sharedService: SharedService, private router: Router) { }

  ngOnInit(): void {
  }

  borrarDatos(){
    localStorage.removeItem("token");
    this.router.navigate(['/home']);
  }

}
