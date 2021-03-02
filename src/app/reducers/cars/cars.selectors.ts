import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './cars.reducer';


const carsState = (state: State) => state;

export const selectCarsState = createSelector(carsState, (state) => {
  console.log('calculate selectCarsState');
  return state;
});


export const selectCarsSpecificBrand = createSelector(selectCarsState, (state: State, props: { brand: string}) => {
  console.log('calculate selectCarsSpecificBrand');
  return state.cars.filter(c => c.brand === props.brand);
});
