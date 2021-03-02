import { Component } from '@angular/core';
import { Store, createSelector } from '@ngrx/store';
import { Car } from './reducers/cars/cars.reducer';
import * as fromCars from './reducers/cars/cars.selectors';
import { tap } from 'rxjs/operators';
import { State } from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cars$ = this.store.select(fromCars.selectCars).pipe(
    tap((cars) => console.log('cars', cars))
  );

  constructor(private store: Store<State>) {}

  changeBrand(brand: string) {
    this.cars$ = this.store.select(this.createBrandSpecificSelector(), { brand });
  }

  private createBrandSpecificSelector() {
    return createSelector(
      fromCars.selectCars,
      (state: Car[], props: { brand: string}) => {
        console.log('calculate selectCarsSpecificBrand');
        return state.filter(c => c.brand.toLowerCase() === props.brand.toLowerCase());
      });
  }
}
