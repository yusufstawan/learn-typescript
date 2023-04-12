interface AndroidPhone {
  name: string;
  menu(): void;
  home(): void;
  back(): void;
}

class Samsung implements AndroidPhone {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  menu(): void {
    console.log("menu tapped");
  }
  home(): void {
    console.log("home tapped");
  }
  back(): void {
    console.log("back tapped");
  }
}

class Asus implements AndroidPhone {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  menu(): void {
    console.log("menu tapped");
  }
  home(): void {
    console.log("home tapped");
  }
  back(): void {
    console.log("back tapped");
  }
}

class GameA {
  private phone: AndroidPhone;

  constructor(phone: AndroidPhone) {
    this.phone = phone;
  }

  back() {
    console.log("kembali ke menu utaman di game");
  }

  menu() {
    this.phone.menu();
  }

  home() {
    this.phone.home();
  }
}

const samsung = new Samsung("Tipe A");

const game = new GameA(samsung);
game.home();
game.back();
game.menu();

// ----------- IPhone

interface ApplePhone {
  home(): void;
}

class IPhone implements ApplePhone {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  home(): void {
    console.log("muncul global menu");
  }
}

const iphone = new IPhone("Iphone SE");

// const game2 = new GameA(iphone);
// akan error karena tidak sesuai interface
