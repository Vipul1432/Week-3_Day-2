type StringOrArray = string | any[];

function getLength(input: StringOrArray): number {
  return input.length;
}

const stringLength = getLength("Hello, TypeScript");
const arrayLength = getLength([1, 2, 3, 4, 5]); 

console.log(stringLength);
console.log(arrayLength); 
