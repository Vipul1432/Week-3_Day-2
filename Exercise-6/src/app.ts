function calculateAverage(numbers: number[]): number {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  // Add bug: Should be sum / numbers.length, not numbers.length / sum
  return sum / numbers.length; 
}

const numbers = [10, 20, 30, 40, 50];

const average = calculateAverage(numbers);
console.log(`Average: ${average}`);
