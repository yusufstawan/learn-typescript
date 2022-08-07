"use strict";
// tipe data pada balikan function
function getName() {
    return "John Doe";
}
console.log(getName());
function getAge() {
    return 123;
}
// tidak mereturn apa apa menggunakan void
function printName() {
    console.log("print name");
}
printName();
// argument types
function multiply(val1, val2) {
    return val1 * val2;
}
console.log(multiply(2, 3));
let age = 123;
const Add = (val1, val2) => val1 + val2;
