import Asus from "./Asus";
import Macbook from "./Macbook";

let asus = new Asus("Zenbook", true, true);
console.log(asus);

let macbook = new Macbook("Pro", true, true);
console.log(macbook);
macbook.a();
