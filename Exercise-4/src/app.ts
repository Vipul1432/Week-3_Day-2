class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayCarInfo(): void {
    console.log(`${this.make} ${this.model} (${this.year})`);
  }
}

// Creating a car object
const myCar = new Car("Tata", "Thar", 2023);

// Calling the method to display car info
myCar.displayCarInfo(); 
