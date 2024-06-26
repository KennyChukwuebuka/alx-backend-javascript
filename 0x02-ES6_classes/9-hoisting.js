/*eslint-disable*/

// HolbertonClass.js

// Define HolbertonClass and StudentHolberton as named exports
export class HolbertonClass {
  constructor(year, location) {
    this.year = year;
    this.location = location;
  }
}

export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get fullStudentDescription() {
    return `${this.firstName} ${this.lastName} - ${this.holbertonClass.year} - ${this.holbertonClass.location}`;
  }
}

// Create instances of HolbertonClass
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

// Create instances of StudentHolberton
const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

// Export an array containing all student instances
export const listOfStudents = [student1, student2, student3, student4, student5];

