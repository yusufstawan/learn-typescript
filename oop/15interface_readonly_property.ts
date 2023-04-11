interface Student {
  readonly name: string;
  readonly age: number;
}

let student: Student = {
  name: "test",
  age: 25,
};

// student.name = "asdasd";
// akan error karena hanya bisa diassign satu kali

console.log(student);
