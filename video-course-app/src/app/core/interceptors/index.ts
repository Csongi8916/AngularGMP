import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthTokenInterceptor } from './auth-token-interceptor';
import { LoadingInterceptor } from './loading-interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
];