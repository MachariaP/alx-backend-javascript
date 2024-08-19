const http = require('http');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 * @returns {Promise<String>} A promise that resolves to a report string.
 */
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
    return;
  }

  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const reportParts = [];
    const lines = data.trim().split('\n');
    const studentGroups = {};
    const headers = lines[0].split(',');

    lines.slice(1).forEach(line => {
      const [firstname, lastname, age, field] = line.split(',');
      if (!studentGroups[field]) {
        studentGroups[field] = [];
      }
      studentGroups[field].push(firstname);
    });

    const totalStudents = Object.values(studentGroups).reduce((acc, group) => acc + group.length, 0);
    reportParts.push(`Number of students: ${totalStudents}`);
    for (const [field, students] of Object.entries(studentGroups)) {
      reportParts.push(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }

    resolve(reportParts.join('\n'));
  });
});

const SERVER_ROUTE_HANDLERS = [
  {
    route: '/',
    handler(_, res) {
      const responseText = 'Hello Holberton School!';
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(responseText);
    },
  },
  {
    route: '/students',
    handler(_, res) {
      const responseParts = ['This is the list of our students'];

      countStudents(DB_FILE)
        .then((report) => {
          responseParts.push(report);
          const responseText = responseParts.join('\n');
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end(responseText);
        })
        .catch((err) => {
          responseParts.push(err.message);
          const responseText = responseParts.join('\n');
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end(responseText);
        });
    },
  },
];

app.on('request', (req, res) => {
  const routeHandler = SERVER_ROUTE_HANDLERS.find(handler => handler.route === req.url);
  if (routeHandler) {
    routeHandler.handler(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Server listening at -> http://${HOST}:${PORT}`);
});

module.exports = app;
