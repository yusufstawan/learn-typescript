"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, age) {
        this.age = age;
        this.getName = () => {
            return this.name;
        };
        this.name = name;
    }
    setName(value) {
        this.name = value;
    }
}
exports.User = User;
// public = bisa di akses di semua class / dari luar class
// protected = hanya bisa di akses dari class tersebut dan class turunannya
// private = hanya bisa di akses dari class tersebut
class Admin extends User {
    constructor(phone, name, age) {
        super(name, age);
        this.read = true;
        this.write = true;
        this._email = "";
        this.phone = phone;
    }
    getRole() {
        return {
            read: this.read,
            write: this.write,
        };
    }
    set email(value) {
        this._email = value;
    }
    get email() {
        return this._email;
    }
}
let admin = new Admin("081234", "admin", 20);
console.log(admin.getName());
console.log(admin.getRole());
console.log(admin.phone);
admin.email = "admin@gmail.com";
console.log(admin.email);
