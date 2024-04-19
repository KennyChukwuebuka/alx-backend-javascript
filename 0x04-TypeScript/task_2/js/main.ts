// DirectorInterface
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  // TeacherInterface
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  // Director class implementing DirectorInterface
  class Director implements DirectorInterface {
    workFromHome(): string {
      return 'Working from home';
    }
    getCoffeeBreak(): string {
      return 'Getting a coffee break';
    }
    workDirectorTasks(): string {
      return 'Getting to director tasks';
    }
  }
  
  // Teacher class implementing TeacherInterface
  class Teacher implements TeacherInterface {
    workFromHome(): string {
      return 'Cannot work from home';
    }
    getCoffeeBreak(): string {
      return 'Cannot have a break';
    }
    workTeacherTasks(): string {
      return 'Getting to work';
    }
  }
  
  // createEmployee function
  function createEmployee(salary: number | string) {
    if (typeof salary === 'number' && salary < 500) {
      return new Teacher();
    } else {
      return new Director();
    }
  }
  
  // Testing the function
  console.log(createEmployee(200)); // Teacher
  console.log(createEmployee(1000)); // Director
  console.log(createEmployee('$500')); // Director
  

  // isDirector function
function isDirector(employee: any): employee is Director {
    return employee instanceof Director;
  }
  
  // executeWork function
  function executeWork(employee: Director | Teacher) {
    if (isDirector(employee)) {
      return employee.workDirectorTasks();
    } else {
      return employee.workTeacherTasks();
    }
  }
  
  // Testing the functions
  console.log(executeWork(createEmployee(200))); // Getting to work
  console.log(executeWork(createEmployee(1000))); // Getting to director tasks
  

  // String literal type Subjects
type Subjects = 'Math' | 'History';

// Function teachClass
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  } else {
    return 'Invalid class';
  }
}

// Testing the function
console.log(teachClass('Math')); // Teaching Math
console.log(teachClass('History')); // Teaching History
