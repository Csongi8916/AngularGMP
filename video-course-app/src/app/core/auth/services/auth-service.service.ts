import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, LoginModel } from '../model/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private isAuth: boolean;
  
  constructor(private http: HttpClient) {
    this.isAuth = false;
  }

  Login(email: string, password: string): Observable<LoginModel> {
    if (email && password) {
      let res = this.http.post<LoginModel>(`http://localhost:3004/auth/login`, {login: email, password: password});
      return res;
    }
    return null;
  }

  Logout(): void {
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    this.isAuth = false;
    console.log('Logged out successfully');
  }

  //TODO Must find better solution
  SetAuthenticated(auth: boolean): void {
    this.isAuth = auth;
  }

  IsAuthenticated(): boolean {
    return this.isAuth;
  }

  GetUserInfo(token: string): Observable<User> {
    let res = this.http.post<User>(`http://localhost:3004/auth/userinfo`, { token: token });
    return res;
  }

}
