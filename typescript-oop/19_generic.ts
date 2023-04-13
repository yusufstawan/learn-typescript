function getData(value: any) {
  return value;
}

const data1 = getData(123);
console.log(data1);

// --- Generic Function ---

function getData2<T>(value: T): T {
  return value;
}

const data2 = getData2<string>("test");
console.log(data2.length);

const data21 = getData2<number>(123);
console.log(data21.toFixed(2));
