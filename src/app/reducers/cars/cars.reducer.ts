import { Action, createReducer, on } from '@ngrx/store';


export const carsFeatureKey = 'cars';

export interface State {
  cars: Car[];
}

export const initialState: State = {
  cars: []
};


export const reducer = createReducer(
  initialState,

);

export interface Car {
  brand: string;
  type: string;

}

