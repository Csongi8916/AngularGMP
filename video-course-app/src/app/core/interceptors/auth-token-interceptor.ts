import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthServiceService } from '../auth/services/auth-service.service';
import { Store } from '@ngrx/store';
import AuthState from 'src/app/store/model/auth.state';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  constructor(private store: Store<{authInfo: AuthState}>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    let token: string = '';
    this.store.source.subscribe(x => {
      token = x.auth.token;
      req = req.clone({
        setHeaders: {
          Authorization: `${token}`
        }
      });
    });

    return next.handle(req);
  }
}