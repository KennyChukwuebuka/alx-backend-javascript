/*eslint-disable*/
// 100-evcar.js

import Car from './10-car.js';

const _range = Symbol('range');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  cloneCar() {
    // Create a new Car instance with the same properties
    return new Car(this.brand, this.motor, this.color);
  }
}
