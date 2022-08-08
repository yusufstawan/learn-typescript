// tipe data pada balikan function

function getName(): string {
  return "John Doe";
}

console.log(getName());

function getAge(): number {
  return 123;
}

// tidak mereturn apa apa menggunakan void
function printName(): void {
  console.log("print name");
}

printName();

// argument types
function multiply(val1: number, val2: number): number {
  return val1 * val2;
}

console.log(multiply(2, 3));

// function as types

type Age = number;
let age: Age = 123;

type Tambah = (val1: number, val2: number) => number;

const Add: Tambah = (val1, val2) => val1 + val2;

// default parameter
const fullName = (firstName: string, lastName: string = "Setiyawan"): string => {
  return firstName + " " + lastName;
};

console.log(fullName("Yusuf"));

// optional parameter
const getUmur = (val1: string, val2?: string): string => {
  return val1 + " " + val2;
};

console.log(getUmur("A"));
