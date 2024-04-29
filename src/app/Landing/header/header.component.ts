// header.component.ts
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  MostrarOcultar = false;

  constructor(public sharedService: SharedService) { }

  ngOnInit(): void {
  }

}
