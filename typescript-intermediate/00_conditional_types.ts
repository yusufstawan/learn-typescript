// Conditional Types

class Admin {
  create() {}
  read() {}
  update() {}
  delete() {}
}

class Guest {
  read() {}
  comment() {}
}

type User<T> = T extends "admin" ? Admin : Guest;
// type User2<T> = T === "admin" ? Admin : Guest; // akan error karena === tidak bisa digunakan di type

const sales: User<"admin"> = new Admin();
const sales2: User<"guest"> = new Guest();

// Extends
type number1 = 2 extends number ? true : false; // true
type number2 = number extends 10 ? true : false; // false

type NumberArray1 = number[] extends [] ? true : false; // false
type NumberArray2 = [] extends number[] ? true : false; // true
type NumberArray3 = number[] extends any[] ? true : false; // true
