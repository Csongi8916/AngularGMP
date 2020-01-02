import { Action } from '@ngrx/store';


export enum AuthActionTypes {
  Login = '[Login Page] Login',
  LoginComplete = '[Login Page] Login Complete',
  LoginFailure = '[Auth API] Login Failure'
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;
  constructor(public payload: any) { }
}

export class LoginComplete implements Action {
  readonly type = AuthActionTypes.LoginComplete;
}

export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LoginFailure;
  constructor(public payload: any) { }
}

export type AuthActions =
  | Login
  | LoginComplete
  | LoginFailure;
