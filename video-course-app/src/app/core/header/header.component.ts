import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth/services/auth-service.service';

@Component({
  selector: 'vc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoginPage: boolean;
  username: string;

  constructor(public authService: AuthServiceService) {
  }

  ngOnInit() {
    this.authService.authState.subscribe(state => {
      if (state) {
        const token = window.localStorage.getItem('token');
        this.authService.GetUserInfo(token).subscribe(user => {
          this.username = user.login;
          console.log(this.username);
        });
      }
    });
  }

  ngDoCheck() {
    this.isLoginPage = window.location.pathname === '/login';
  }

  LogoutClickHandler() {
    this.username = '';
    this.authService.Logout();
  }

}
