interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
  }
  
  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: true,
    location: 'London',
    numberOfReports: 17,
  };
  
  console.log(director1);


  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  const printTeacher: printTeacherFunction = (firstName, lastName) => {
    const firstInitial = firstName.charAt(0).toUpperCase();
    const lastNameFull = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    return `${firstInitial}. ${lastNameFull}`;
  };

  // Example usage:
  console.log(printTeacher("John", "Doe")); // Output: J. Doe


  // Define an interface for the constructor parameters
interface StudentConstructor {
    firstName: string;
    lastName: string;
  }
  
  // Define an interface for the class methods
  interface StudentInterface {
    workOnHomework(): string;
    displayName(): string;
  }
  
  // Implement the StudentClass using the defined interfaces
  class StudentClass implements StudentInterface {
    firstName: string;
    lastName: string;
  
    constructor({ firstName, lastName }: StudentConstructor) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  
  // Example usage:
  const student = new StudentClass({ firstName: "John", lastName: "Doe" });
  console.log(student.workOnHomework()); // Output: Currently working
  console.log(student.displayName()); // Output: John
