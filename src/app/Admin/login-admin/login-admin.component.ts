import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Useradmin } from 'src/app/models/useradmin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {


  constructor( private adminService: AdminService,
    private router: Router
  ) { }

  usernameAdmin: string = "";
loginUsuario() {

  let useradmin: Useradmin = {
    username: this.usernameAdmin,
    password: '123',

  };

  this.adminService.loginAdmin(useradmin).pipe().subscribe(
    (token) => {
      if (token) {
        localStorage.setItem("token", String(token));
        this.router.navigate(['/dashboard']);
      } else {
        console.error('Login failed');
      }
    },
    (error) => {
      console.error('Login failed', error);
    }
  );
}

  
  

  
}
