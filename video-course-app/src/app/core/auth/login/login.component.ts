import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { Course } from 'src/Entities/Interfaces';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../../store/actions/auth.action';

@Component({
  selector: 'vc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthServiceService, private router: Router, private store: Store<string>) { }

  ngOnInit() {
  }

  LoginClickHandler(email: string, password: string) {
    this.authService.Login(email, password).subscribe(result => {
      if (result) {
        this.store.dispatch(new AuthActions.Login({ token: result.token }));
        localStorage.setItem('token', result.token);
        this.authService.SetAuthenticated(result.token);
        this.authService.GetUserInfo(result.token).subscribe(user => {
          localStorage.setItem('email', user.login);
        });
        this.authService.authState.next(true);
        this.router.navigate(['/']);
      } else {
        alert('Sikertelen bejelentkezés');
      }
    });
  }
}
