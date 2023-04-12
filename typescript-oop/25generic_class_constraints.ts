interface Product {
  sell(): void;
}

class CarProduct implements Product {
  sell(): void {
    console.log("sell car");
  }
}

class MotorProduct implements Product {
  sell(): void {
    console.log("sell Motor");
  }
}

function sellProducts<T extends Product>(products: T[]): void {
  products.forEach((product) => {
    product.sell();
  });
}

const car = new CarProduct();
const motor = new MotorProduct();

sellProducts([car, motor]);
