class ClassA {
  name: string = "ClassA";
}

class ClassBaru<T> {
  class: T;

  constructor(classObj: T) {
    this.class = classObj;
  }
}

const classBaru = new ClassA();
const classBaru2 = new ClassBaru(classBaru);
