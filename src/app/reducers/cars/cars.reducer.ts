import { Action, createReducer, on } from '@ngrx/store';


export const carsFeatureKey = 'cars';

export interface State {
  cars: Car[];
}

export const initialState: State = {
  cars: [
    {brand: 'Skoda', type: 'Fabia'},
    {brand: 'Skoda', type: 'Octavia'},
    {brand: 'Skoda', type: 'Karoq'},
    {brand: 'Skoda', type: 'Kodiak'},
    {brand: 'Skoda', type: 'Superb'},
    {brand: 'VW', type: 'Polo'},
    {brand: 'VW', type: 'Golf'},
    {brand: 'VW', type: 'Passat'},
    {brand: 'VW', type: 'Tiguan'},
  ]
};


export const reducer = createReducer(
  initialState,
);

export interface Car {
  brand: string;
  type: string;

}

