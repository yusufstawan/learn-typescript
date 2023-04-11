class Hewan6 {
  name: string = "";

  bernafas() {
    console.log("bernafas");
  }
}

class Katak6 extends Hewan6 {
  bernafas() {
    console.log("malas bernafas");
  }
}

const katak6 = new Katak6();
katak6.bernafas();
