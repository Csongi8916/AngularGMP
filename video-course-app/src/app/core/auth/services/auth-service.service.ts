import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, LoginModel } from '../model/User';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private token: string;
  authState: BehaviorSubject<boolean>;
  
  constructor(private http: HttpClient) {
    this.authState = new BehaviorSubject<boolean>(this.IsAuthenticated());
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
    this.token = '';
    this.authState.next(false);
    console.log('Logged out successfully');
  }

  //TODO Must find better solution
  SetAuthenticated(token: string): void {
    this.token = token;
  }

  GetAuthToken(): string {
    return this.token;
  }

  IsAuthenticated(): boolean {
    return this.token ? true : false;
  }

  GetUserInfo(token: string): Observable<User> {
    let res = this.http.post<User>(`http://localhost:3004/auth/userinfo`, { token: token });
    return res;
  }

}
