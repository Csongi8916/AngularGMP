import { Action } from '@ngrx/store';
import * as AuthActions from '../actions/auth.action';

// TODO Remove any!
const initialState: any = {
  isLogged: false,
  token: ''
};

export function authReducer(state: any = initialState, action: Action) {
  console.log(action.type, state);
  switch (action.type) {
    case AuthActions.AuthActionTypes.Login:
      return {
        ...state,
        isLogged: true,
        //token: action.payload
      };
    default:
      return state;
  }
}
