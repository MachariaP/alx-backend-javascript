// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two students
  const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York",
  };
  
  const student2: Student = {
    firstName: "Jane",
    lastName: "Doe",
    age: 22,
    location: "Los Angeles",
  };
  
  // Create an array named studentsList containing the two students
  const studentsList: Array<Student> = [student1, student2];