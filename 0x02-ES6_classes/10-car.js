/*eslint-disable*/
// 10-car.js

const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');

export default class Car {
  constructor(brand, motor, color) {
    this[_brand] = brand;
    this[_motor] = motor;
    this[_color] = color;
  }

  cloneCar() {
    // Use the constructor of the current instance to create a new instance
    return new this.constructor(this[_brand], this[_motor], this[_color]);
  }
}

