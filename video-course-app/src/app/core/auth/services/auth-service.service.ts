import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, LoginModel } from '../model/User';
import { Observable, BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';
import AuthState from 'src/app/store/model/auth.state';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private token: string;

  constructor(private http: HttpClient, private store: Store<{authInfo: AuthState}>) {
  }

  Login(email: string, password: string): Observable<LoginModel> {
    if (email && password) {
      return this.http.post<LoginModel>(`http://localhost:3004/auth/login`, { login: email, password: password });
    }
    return null;
  }

  Logout(): void {
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    this.token = '';
    console.log('Logged out successfully');
  }

  // TODO Must find better solution
  SetAuthenticated(token: string): void {
    this.token = token;
  }

  IsAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return token ? true : false;
  }

  GetUserInfo(token: string): Observable<User> {
    let res = this.http.post<User>(`http://localhost:3004/auth/userinfo`, { token: token });
    return res;
  }

}
