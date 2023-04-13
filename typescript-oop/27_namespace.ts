namespace NameSpaceExample {
  export class Hewan {}

  export const kodok = new Hewan();
}

// memanggil class Hewan di luar namespace
const belalang = new NameSpaceExample.Hewan();
let kodok2 = NameSpaceExample.kodok;
