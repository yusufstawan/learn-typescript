abstract class Vehicle {
  abstract wheels: number;

  start(): void {
    console.log("Starting vehicle");
  }
}

class Car extends Vehicle {
  wheels: number = 4;
}

class Motor extends Vehicle {
  wheels: number = 2;
}

let car = new Car();
console.log(car.wheels);
car.start();

let motor = new Motor();
console.log(motor.wheels);
motor.start();
