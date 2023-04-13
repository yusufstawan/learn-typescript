// seperti pabrik membuat product dari class yang berbeda - beda

class Truck {
  private qty: number;

  constructor(qty: number) {
    this.qty = qty;
  }

  deliver(): void {
    console.log(`kirim ${this.qty} menggunakan truck`);
  }
}

class Ship {
  private qty: number;

  constructor(qty: number) {
    this.qty = qty;
  }

  deliver(): void {
    console.log(`kirim ${this.qty} menggunakan kapan`);
  }
}

let type = "deliver_by_land";
if (type === "deliver_by_land") {
  new Truck(100);
} else if (type === "deliver_by_sea") {
  new Ship(100);
}
