// Indexed Access Types

type Animal = {
  name: string;
  legs: number;
  lungs: boolean;
  ears: boolean;
  skills: {
    run: boolean;
    fly: boolean;
    swim: boolean;
  };
};

type animalSkills = Animal["skills"]; // { run: boolean; fly: boolean; swim: boolean; }
// type animalSkills2 = Animal.skills;

type animalSkills2 = Animal["skills" | "legs"];
type animalSkills3 = Animal["legs"];
