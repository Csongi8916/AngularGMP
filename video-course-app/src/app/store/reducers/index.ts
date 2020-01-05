import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { authReducer } from './auth.reducer';
import { courseReducer } from './course.reducer';


export interface State {

}

export const reducers: ActionReducerMap<State> = {
  auth: authReducer,
  cor: courseReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
