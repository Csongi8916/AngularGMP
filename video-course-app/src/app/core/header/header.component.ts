import { Component, OnInit, DoCheck, ChangeDetectorRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthServiceService } from '../auth/services/auth-service.service';
import * as AuthActions from '../../store/actions/auth.action';
import AuthState from 'src/app/store/model/auth.state';
import { ThrowStmt } from '@angular/compiler';
import { TranslateService } from '@ngx-translate/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'vc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {

  authInfo$: Observable<AuthState>;
  isLoginPage: boolean;
  username: string;

  welcomeText: string;

  constructor(public authService: AuthServiceService, private store: Store<{ authInfo: AuthState }>, private translateService: TranslateService) {
    this.authInfo$ = this.store.select(state => state.authInfo);
  }

  ngOnInit() {
    this.store.source.subscribe(x => {
      this.username = x.auth.username
    });
    this.translateService.stream('WELCOME').subscribe((res: string) => {
      this.welcomeText = res;
    });
  }

  ngDoCheck() {
    this.isLoginPage = window.location.pathname === '/login';
  }

  onChangeLanguageSelect(language: string) {
    console.log(language);
    this.translateService.use(language);
  }

  LogoutClickHandler() {
    this.username = '';
    this.store.dispatch(new AuthActions.Logout());
    this.authService.Logout();
  }

}
