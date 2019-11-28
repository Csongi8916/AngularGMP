import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private isAuth: boolean;
  private loggedUsers: User[];

  constructor() {
    this.isAuth = false;
    this.loggedUsers = [];
  }

  Login(email: string, password: string): void {
    console.log('Logged in successfully');
    localStorage.setItem('email', email);
    localStorage.setItem('token', 'fake token');
    const user: User = { email: email, password: password, isAuthenticated: true };
    this.loggedUsers.push(user);
    this.isAuth = true;
  }

  Logout(): void {
    const email: string = localStorage.getItem('email');
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    this.isAuth = false;
    const index: number = this.loggedUsers.findIndex(x => x.email === email);
    console.log('Logged out successfully');

    if (index > -1) {
      this.loggedUsers.splice(index, 1);
    }
  }

  IsAuthenticated(): boolean {
    return this.isAuth;
  }

  GetUserInfo(email: string): User {
    const user: User = this.loggedUsers.find(x => x.email === email);
    return user;
  }

}
