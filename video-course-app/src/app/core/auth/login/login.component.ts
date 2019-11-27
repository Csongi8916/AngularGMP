import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';
import { User } from '../interfaces/User';


@Component({
  selector: 'app-login',
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
    this.email = email;
    this.password = password;
    this.authService.Login(email, password);
    const user: User = this.authService.GetUserInfo(email);
    console.log('GetUserInfo: ', user.email, user.password, user.isAuthenticated);
    this.router.navigate(['/']);
  }
}
