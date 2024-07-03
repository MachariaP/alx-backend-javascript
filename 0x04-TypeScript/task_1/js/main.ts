/**
 * Defines the structure for a Teacher object.
 * 
 * Attributes:
 * - `firstName`: A string representing the teacher's first name. It is a readonly property that can only be set upon initialization.
 * - `lastName`: A string representing the teacher's last name. It is a readonly property that can only be set upon initialization.
 * - `fullTimeEmployee`: A boolean indicating whether the teacher is a full-time employee.
 * - `yearsOfExperience`: An optional number representing the years of experience the teacher has. It is not required to create a Teacher object.
 * - `location`: A string representing the location where the teacher works.
 * - `[key: string]: any`: Allows for additional attributes without specifying their names, providing flexibility to include any other properties such as `contract`.
 */

// Define the Teacher interface as provided
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // Allows for additional properties
  }
  
  // Create an instance of a Teacher object
  const teacher: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    location: "New York",
    contract: "Permanent" // Example of an additional property
  };

  // Extend the Teacher interface to include Directors with an additional attribute
interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  // Example usage of the Directors interface
  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
    
  // Log the teacher object to the console
  console.log(teacher);

  // Log the director object to the console
  console.log(director1);

  // Define the interface for the printTeacher function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  // Implement the printTeacher function
  const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };
  
  // Example usage
  console.log(printTeacher("John", "Doe")); // Output: J. Doe

  // Interface describing the constructor of the StudentClass
interface StudentConstructor {
    new (firstName: string, lastName: string): Student;
  }
  
  // Interface describing the StudentClass
  interface Student {
    workOnHomework(): string;
    displayName(): string;
  }
  
  // Implementation of the StudentClass
  class StudentClass implements Student {
    constructor(private firstName: string, private lastName: string) {}
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }