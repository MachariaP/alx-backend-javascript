const fs = require('fs');

/**
 * Function to count students in a CSV file.
 * @param {string} path - The path to the CSV file.
 */
function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');
        const lines = data.split('\n').filter(line => line.trim() !== '');
        const header = lines.shift();
        const fieldCounts = {};
        
        lines.forEach(line => {
            const [firstname, lastname, age, field] = line.split(',');
            if (!fieldCounts[field]) {
                fieldCounts[field] = { count: 0, students: [] };
            }
            fieldCounts[field].count += 1;
            fieldCounts[field].students.push(firstname);
        });
        
        console.log(`Number of students: ${lines.length}`);
        
        for (const [field, { count, students }] of Object.entries(fieldCounts)) {
            console.log(`Number of students in ${field}: ${count}. List: ${students.join(', ')}`);
        }
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
