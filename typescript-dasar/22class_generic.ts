class List<T> {
  private data: T[]; // private data: Array<T>;

  constructor(...elements: T[]) {
    this.data = elements;
  }

  add(element: T): void {
    this.data.push(element);
  }

  addMultiple(...elements: T[]): void {
    this.data.push(...elements);
  }

  getAll(): T[] {
    return this.data;
  }
}

let numberList = new List<number>(1, 2, 3);
numberList.add(4);
numberList.addMultiple(5, 6, 7);
console.log(numberList.getAll());

let random = new List<number | string>(1, "John", 2, "Doe", 3);
random.add("Smith");
console.log(random.getAll());
