import { Component, OnInit, DoCheck } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthServiceService } from '../auth/services/auth-service.service';
import * as AuthActions from '../../store/actions/auth.action';
import AuthState from 'src/app/store/model/auth.state';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'vc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {

  authInfo$: Observable<AuthState>;
  isLoginPage: boolean;
  username: string;

  constructor(public authService: AuthServiceService, private store: Store<{authInfo: AuthState}>) {
    this.authInfo$ = this.store.select(state => state.authInfo);
  }

  ngOnInit() {
    this.store.source.subscribe(x => {
      this.username = x.auth.username
    });
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
