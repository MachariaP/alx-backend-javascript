const fs = require('fs');

/**
 * Function to count students in a CSV file asynchronously.
 * @param {string} path - The path to the CSV file.
 * @returns {Promise<void>} - A promise that resolves when the counting is done.
 */
function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
                return;
            }

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

            resolve();
        });
    });
}

module.exports = countStudents;
