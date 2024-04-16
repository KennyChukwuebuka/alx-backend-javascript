/*
Create a function updateStudentGradeByCity that returns an array of students 
for a specific city with their new grade

It should accept a list of students (from getListStudents), a city (String), and 
newGrades (Array of “grade” objects) as parameters.

newGrades is an array of objects with this format:

  {
    studentId: 31,
    grade: 78,
  }
If a student doesn’t have grade in newGrades, the final grade should be N/A.

You must use filter and map combined.
*/

export default function updateStudentGradeByCity(listStudent, city, newGrade) {
    if (!Array.isArray(listStudent)) {
        return [];
    }
    return listStudent
        .filter((student) => student.location === city)
        .map((student) => {
            const found = newGrade.find((grade) => grade.studentId === student.id);
            if (found) {
                return { ...student, grade: found.grade };
            }
            return { ...student, grade: 'N/A' };
        });
}