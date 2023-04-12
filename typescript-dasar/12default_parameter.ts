// default parameter

const fullName = (firstName: string, lastName: string = "Doe") => {
  return `${firstName} ${lastName}`;
};

console.log(fullName("John"));
console.log(fullName("John", "Lennon"));
