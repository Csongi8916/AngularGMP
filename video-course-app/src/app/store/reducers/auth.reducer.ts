import { Action } from '@ngrx/store';
import { AuthActionTypes, Login, LoginComplete, LoginFailure, Logout } from '../actions/auth.action';
import { LoginModel } from '../../core/auth/model/User';

// TODO Remove any!
const initialState = {
  isLogged: false,
  token: ''
};

export function authReducer(state: any = initialState, action: Login | LoginComplete | LoginFailure | Logout) {
  console.log(action.type, state);
  switch (action.type) {
    case AuthActionTypes.Login:
      return {
        ...state,
        isLogged: true,
        token: action.payload
      };
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
