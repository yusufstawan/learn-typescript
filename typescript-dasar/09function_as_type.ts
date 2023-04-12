type Age = number;

let age: Age = 20;

type Tambah = (val1: number, val2: number) => number;

const Add: Tambah = (val1, val2) => {
  return val1 + val2;
};

console.log(Add(3, 4));
