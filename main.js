const fs = require('fs');
const files = fs.readFileSync('./students.json', 'utf8');
const students = JSON.parse(files)

const getStudentByIndex = (anIndex) => {
  return students.students[anIndex];
}

const getStudentByName = (aName) => {
  for (const item of students.students) {
    if (item.name === aName) {
      return item;
    }
  }
  return -1;
}

if (typeof getStudentByIndex === 'undefined') {
  getStudentByIndex = undefined;
}

if (typeof getStudentByName === 'undefined') {
  getStudentByName = undefined;
}

if (typeof graduateStudent === 'undefined') {
  graduateStudent = undefined;
}


module.exports = {
  getStudentByIndex,
  getStudentByName,
  graduateStudent,
}
