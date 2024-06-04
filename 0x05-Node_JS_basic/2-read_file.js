const fs = require('fs');

function countStudents(path) {
  try {
    const readData = fs.readFileSync(path, 'utf-8');

    const splitLines = readData.split('\n').filter(splitLine => splitLine.trim() !== '');

    if (splitLines.length === 0) {
      throw new Error('Cannot load the database');
    }

    // Remove the header line
    const header = splitLines.shift();

    const studentsByField = {};
    let totalStudents = 0;

    for (const splitLine of splitLines) {
      const student = splitLine.split(',');
      if (student.length >= 4) {
        const firstName = student[0].trim();
        const field = student[3].trim();

        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }

        studentsByField[field].push(firstName);
        totalStudents += 1;
      }
    }

    console.log(`Number of students: ${totalStudents}`);

    for (const [field, students] of Object.entries(studentsByField)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
