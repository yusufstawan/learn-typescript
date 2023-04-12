interface Laptop {
  name: string;
  on(): void;
  off(): void;
}

class Asus implements Laptop {
  name: string;
  isGaming: boolean;

  constructor(name: string, isGaming: boolean) {
    this.name = name;
    this.isGaming = isGaming;
  }

  on(): void {
    console.log("Asus is on");
  }
  off(): void {
    console.log("Asus is off");
  }
}

class Macbook implements Laptop {
  name: string;
  keyboardLight: boolean;

  constructor(name: string, keyboardLight: boolean) {
    this.name = name;
    this.keyboardLight = keyboardLight;
  }
  on(): void {
    console.log("Macbook is on");
  }
  off(): void {
    console.log("Macbook is off");
  }
}

let asus = new Asus("ROG", true);
asus.on();
asus.off();

let macbook = new Macbook("Macbook Pro", true);
console.log(asus);
console.log(macbook);
