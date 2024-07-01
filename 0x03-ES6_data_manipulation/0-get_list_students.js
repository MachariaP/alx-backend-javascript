/**
 * This function fetches a list of students.
 * 
 * @returns {Array<Object>} An array containing student information as objects.
 *  - Each object has the following properties:
 *      - `id` (number): The unique identifier for the student.
 *      - `firstName` (string): The student's first name.
 *      - `location` (string): The student's location (city, state, etc.).
 *  
 * @author Phinehas Macharia <https://github.com/MachariaP>
 */

const getListStudents = () => [
  {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
  },
    {
    id: 2,
    firstName: 'James',
    location: 'Columbia',
  }, 
    {
    id: 5,
    firstName: 'Serena',
    location: 'San Francisco',
  }, 

];

export default getListStudents;
