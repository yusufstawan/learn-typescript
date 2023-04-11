const getUmur = (val1: string, val2?: string): string => {
  return `${val1} ${val2}`;
};

console.log(getUmur("John"));
console.log(getUmur("John", "Doe"));
