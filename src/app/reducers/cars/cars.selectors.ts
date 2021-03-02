import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../index';


const carsState = (state: State) => state.cars;

export const selectCarsState = createSelector(carsState, (state) => {
  console.log('calculate selectCarsState', state);
  return state;
});

export const selectCars = createSelector(selectCarsState, (state) => {
  console.log('calculate selectCars', state.cars);
  return state.cars;
});
