interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

function introduce(person: Person): void {
  console.log(`${person.firstName} ${person.lastName} is ${person.age} years old`);
}

// Testing the introduce function
const person1: Person = { firstName: "Vipul", lastName: "Kumar", age: 24 };
const person2: Person = { firstName: "Divyanshu", lastName: "Kumar", age: 23 };

introduce(person1); 
introduce(person2); 

  