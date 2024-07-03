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
  
  // Log the teacher object to the console
  console.log(teacher);