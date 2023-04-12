function getData(value: any) {
  return value;
}

// menjadi undefined
console.log(getData("John").length);
console.log(getData(123).length);

// menggunakan generic
function myData<T>(value: T) {
  return value;
}

console.log(myData("John").length);
// akan error karena number tidak memiliki property length
console.log(myData(123).length);

const arrowfunc = <T extends unknown>(value: T) => {
  return value;
};
