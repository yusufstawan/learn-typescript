type Generics2<T> = T;

function genericFunction2<T>(value: T): Generics2<T> {
  return value;
}

console.log(genericFunction2<string>("test"));
