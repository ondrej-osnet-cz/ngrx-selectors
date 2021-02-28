import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCars from './cars/cars.reducer'

export const stateFeatureKey = 'state';

export interface State {
  cars: fromCars.State;
}

export const reducers: ActionReducerMap<State> = {
  cars: fromCars.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
