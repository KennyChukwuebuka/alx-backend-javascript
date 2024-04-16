/*eslint-disable*/
/*
Create a function getStudentIdsSum that returns the sum of all the student ids.

It should accept a list of students (from getListStudents) as a parameter.

You must use the reduce function on the array.
*/

export default function getStudentIdsSum(listStudents) {
    if (!Array.isArray(listStudents)){
        return 0
    }
    return listStudents.reduce((acc, student) => acc + student.id, 0)
}