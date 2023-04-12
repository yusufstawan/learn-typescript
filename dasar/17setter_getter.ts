export class User {
  public name: string;

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

class Admin extends User {
  read: boolean = true;
  write: boolean = true;
  phone: string;
  private _email: string = "";

  constructor(phone: string, name: string, public age: number) {
    super(name, age);
    this.phone = phone;
    console.log(this.phone);
  }

  getRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.write,
    };
  }

  set email(value: string) {
    if (value.length < 5) {
      this._email = "Invalid email";
    } else {
      this._email = value;
    }
  }

  get email(): string {
    return this._email;
  }
}

const admin = new Admin("08234234", "John", 25);
admin.getName();
admin.getRole();
admin.setName("Bob");
admin.phone;

admin.email = "admin@gmail.com";
console.log(admin.email);
