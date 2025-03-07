//Introduction to Class and objects

/*
    A class is a blueprint for creating objects.
    Class defines structure, while objects store actual data.
    Multiple objects can be created from the same class.

*/

// defining a class
class car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  carDetails() {
    return `Car Brand ${this.brand} Car Model ${this.model}`;
  }
}
// creating multiple object(instances of the car class)
const car1 = new car("Toyota", "Supra");
const car2 = new car("Honda", "Civic");
console.log(car1, car1.carDetails());
console.log(car2, car2.carDetails());
