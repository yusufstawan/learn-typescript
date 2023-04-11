interface Vehicle {
  name: string;
  wheels: number;
}

interface Icar extends Vehicle {
  doors: number;
}

class Civic implements Icar {
  name: string = "Civic";
  wheels: number = 4;
  doors: number = 4;
}

const car = new Civic();
console.log(car);
