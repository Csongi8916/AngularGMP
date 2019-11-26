import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private isAuth: boolean;

  constructor() {
    this.isAuth = false;
  }

  Login(email: string, password: string): void {
    console.log('LOGIN');
    localStorage.setItem('email', email);
    localStorage.setItem('token', 'fake token');
    this.isAuth = true;
  }

  Logout(email: string, password: string): void {
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    console.log('You Logout')
  }

  IsAuthenticated(): boolean {
    console.log('AUTH: ' + this.isAuth);
    return this.isAuth;
  }

  GetUserInfo(): void {

  }

}
