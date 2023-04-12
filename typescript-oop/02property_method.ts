class Hewan3 {
  nama: string = "";
  kaki: number = 0;
  mamalia: boolean = false;

  bernafas() {
    console.log(`${this.nama} sedang bernafas`);
  }
}

const hewan = new Hewan3();
console.log(hewan);

hewan.nama = "katak";
hewan.kaki = 4;
console.log(hewan);

hewan.bernafas();
