// extract dan exclude / build-in > TS

type Fruits = "apple" | "banana" | "orange" | { fruits: true; vegetables: false };

type StringFruits = Extract<Fruits, string>;
type ObjectFruits = Extract<Fruits, { fruits: true }>;

type NonStringFruits = Exclude<Fruits, string>;
type NonObjectFruits = Exclude<Fruits, { fruits: true }>;
