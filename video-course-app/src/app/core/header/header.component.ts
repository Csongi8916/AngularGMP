import { Component, OnInit, DoCheck } from '@angular/core';
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

  translateService: TranslateService;
  authInfo$: Observable<AuthState>;
  isLoginPage: boolean;
  username: string;
  //translate: TranslatePipe;

  welcomeText: string;

  constructor(public authService: AuthServiceService, private store: Store<{authInfo: AuthState}>, translateService: TranslateService, /*translate: TranslatePipe*/) {
    this.authInfo$ = this.store.select(state => state.authInfo);
    this.translateService = translateService;
    //this.translate = translate;
  }

  ngOnInit() {
    this.store.source.subscribe(x => {
      this.username = x.auth.username
    });
    this.translateService.get('WELCOME').subscribe((res: string) => {
      this.welcomeText = res;
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
