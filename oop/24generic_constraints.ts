// function generics24<T>(arg: T): T {
//   console.log(arg.length);
//   return arg;
// }

interface Length {
  length: number;
}

function generics24<T extends Length>(arg: T): T {
  console.log(arg.length);
  return arg;
}

const generics25 = generics24("test");
console.log(generics25);
