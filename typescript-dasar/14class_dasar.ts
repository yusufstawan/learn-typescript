export class User {
  public name: string;

  constructor(name: string, public age: number) {
    this.name = name;
  }
}

let user = new User("John", 25);
console.log(user);
