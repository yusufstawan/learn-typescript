export class User {
  name: string;

  constructor(name: string, public age: number) {
    this.name = name;
  }

  setName(value: string): void {
    this.name = value;
  }

  getName = (): string => {
    return this.name;
  };
}

// public = bisa di akses di semua class / dari luar class
// protected = hanya bisa di akses dari class tersebut dan class turunannya
// private = hanya bisa di akses dari class tersebut

class Admin extends User {
  read: boolean = true;
  write: boolean = true;
  phone: string;
  private _email: string = "";

  constructor(phone: string, name: string, age: number) {
    super(name, age);
    this.phone = phone;
  }

  getRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.write,
    };
  }

  set email(value: string) {
    this._email = value;
  }

  get email(): string {
    return this._email;
  }
}

let admin = new Admin("081234", "admin", 20);
console.log(admin.getName());
console.log(admin.getRole());
console.log(admin.phone);

admin.email = "admin@gmail.com";
console.log(admin.email);
