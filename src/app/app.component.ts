import { Component } from '@angular/core';
import { Store, createSelector } from '@ngrx/store';
import { State } from './reducers/cars/cars.reducer';
import { selectCarsState } from './reducers/cars/cars.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private store: Store) {}

  // tslint:disable-next-line: typedef
  private createBrandSpecificSelector() {
    return createSelector(
      selectCarsState,
      (state: State, props: { brand: string}) => {
        console.log('calculate selectCarsSpecificBrand');
        return state.cars.filter(c => c.brand === props.brand);
      });
  }
}
