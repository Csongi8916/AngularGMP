import { Action } from '@ngrx/store';
import { LoginModel } from 'src/app/core/auth/model/User';


export enum AuthActionTypes {
  Login = '[Login Page] Login',
  LoginComplete = '[Login Page] Login Complete',
  LoginFailure = '[Auth API] Login Failure',
  Logout = '[Auth API] Logout'
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;
  constructor(public payload: LoginModel) { }
}

export class LoginComplete implements Action {
  readonly type = AuthActionTypes.LoginComplete;
}

export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LoginFailure;
  constructor(public payload: any) { }
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}

export type AuthActions =
  | Login
  | LoginComplete
  | LoginFailure
  | Logout;
