class Store {
  private name: string = "Store A";
  private profite: number = 1000;

  getName(): string {
    return this.name;
  }

  getProfit(): number {
    return this.profite;
  }
}

class FashionProduct {
  private store: Store;
  private name: string;
  private price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;

    this.store = new Store();
  }

  sell(): void {
    console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`);
  }
}

class TechProduct {
  private store: Store;
  private name: string;
  private price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;

    this.store = new Store();
  }

  sell(): void {
    console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`);
  }
}

const baju = new FashionProduct("Baju", 100000);
baju.sell();

// ---------------------

interface IStore {
  name: string;
  profite: number;
  getProfit(): number;
}

class TokoLama implements IStore {
  name: string = "TokoLama";
  profite: number = 1000;

  getName(): string {
    return this.name;
  }

  getProfit(): number {
    return this.profite;
  }
}

class TokoBaru implements IStore {
  name: string = "TokoLama";
  profite: number = 2500;

  getName(): string {
    return this.name;
  }

  getProfit(): number {
    return this.profite;
  }
}

class HijabProduct {
  private store: IStore;
  private name: string;
  private price: number;

  constructor(store: IStore, name: string, price: number) {
    this.name = name;
    this.price = price;

    this.store = store;
  }

  sell(): void {
    console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`);
  }
}

class FoodProduct {
  private store: IStore;
  private name: string;
  private price: number;

  constructor(store: IStore, name: string, price: number) {
    this.name = name;
    this.price = price;

    this.store = store;
  }

  sell(): void {
    console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`);
  }
}

const tokoLama = new TokoLama();
const tokoBaru = new TokoBaru();

const hijabMahal = new HijabProduct(tokoLama, "Baju Bagus", 100000);
const hijabMahal2 = new HijabProduct(tokoBaru, "Baju Bagus", 100000);

console.log(hijabMahal);
console.log(hijabMahal2);

hijabMahal.sell();
hijabMahal2.sell();
