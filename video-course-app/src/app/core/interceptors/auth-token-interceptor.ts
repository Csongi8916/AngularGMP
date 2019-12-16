import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthServiceService } from '../auth/services/auth-service.service';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthServiceService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    const token: string = this.authService.GetAuthToken();
    req = req.clone({
      setHeaders: {
        Authorization: `${token}`
      }
    });
    return next.handle(req);
  }
}