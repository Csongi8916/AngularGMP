import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthServiceService } from '../auth/services/auth-service.service';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../store/actions/auth.action';

@Component({
  selector: 'vc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {

  isLoginPage: boolean;
  username: string;

  constructor(public authService: AuthServiceService, private store: Store<string>) {
  }

  ngOnInit() {
    // TODO depracated solution, search better solution!!!
    this.store.source.subscribe(x => {
      debugger;
    });

    /*this.authService.authState.subscribe(state => {
      if (state) {
        const token = window.localStorage.getItem('token');
        this.authService.GetUserInfo(token).subscribe(user => {
          this.username = user.login;
        });
      }
    });*/
  }

  ngDoCheck() {
    this.isLoginPage = window.location.pathname === '/login';
  }

  LogoutClickHandler() {
    this.username = '';
    this.store.dispatch(new AuthActions.Logout());
    this.authService.Logout();
  }

}
