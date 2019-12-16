import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { Course } from 'src/Entities/Interfaces';


@Component({
  selector: 'vc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit() {
  }

  LoginClickHandler(email: string, password: string) {
    this.authService.Login(email, password).subscribe(result => {
      if (result) {
        localStorage.setItem('token', result.token);
        this.authService.SetAuthenticated(true);
        this.authService.GetUserInfo(result.token).subscribe(user => {
          localStorage.setItem('email', user.login);
        });
        this.router.navigate(['/']);
      } else {
        alert('Sikertelen bejelentkezés');
      }
    });
  }
}
