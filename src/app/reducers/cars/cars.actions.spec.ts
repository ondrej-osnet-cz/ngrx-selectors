import * as fromCars from './cars.actions';

describe('loadCarss', () => {
  it('should return an action', () => {
    expect(fromCars.loadCarss().type).toBe('[Cars] Load Carss');
  });
});
