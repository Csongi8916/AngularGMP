import { Action } from '@ngrx/store';

export function authReducer(state: string = 'Hello world', action: Action) {
  console.log(action.type, state);
}