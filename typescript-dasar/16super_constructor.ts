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
}

const admin = new Admin("08234234", "John", 25);
admin.getName();
admin.getRole();
admin.setName("Bob");
admin.phone;
