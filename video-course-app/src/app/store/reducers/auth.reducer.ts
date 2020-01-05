import { Action } from '@ngrx/store';
import { AuthActionTypes, Login, LoginComplete, LoginFailure, Logout } from '../actions/auth.action';
import { LoginModel } from '../../core/auth/model/User';
import AuthState from '../model/auth.state';

const initialState: AuthState = {
  username: '',
  token: '',
  isLogged: false,
};

export function authReducer(state: AuthState = initialState, action: Login | LoginComplete | LoginFailure | Logout) {
  switch (action.type) {
    case AuthActionTypes.Login:
      const newState = {         
        username:  action.payload.login,
        isLogged: true,
        token: action.payload.token
      };
      return Object.assign({}, state, newState);
      /*return {
        ...state,
        username: '' + action.payload.login,
        isLogged: true,
        token: '' + action.payload.token
      };*/
    case AuthActionTypes.Logout:
      return {
        ...state,
        isLogged: false,
        token: ''
      };
    default:
      return state;
  }
}
