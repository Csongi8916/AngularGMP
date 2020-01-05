export interface User {
  login: string;
  password: string;
  isAuthenticated: boolean;
}

export interface LoginModel {
  isLogged: boolean;
  token: string;
  login: string;
}
