export interface User {
  login: string;
  password: string;
  isAuthenticated: boolean;
}

export interface LoginModel {
  token: string;
}
