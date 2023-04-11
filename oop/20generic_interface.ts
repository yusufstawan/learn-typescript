interface Generics<T> {
  propA: T;
}

function genericFunction<T>(value: T): Generics<T> {
  let data: Generics<T> = {
    propA: value,
  };

  return data;
}

console.log(genericFunction<string>("test"));
console.log(genericFunction<number>(123));
console.log(genericFunction<boolean>(true));
