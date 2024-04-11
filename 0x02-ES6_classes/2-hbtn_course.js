/*eslint-disable*/
class HolbertonCourse {
    constructor(name, length, students) {
        this._name = this.validateString(name);
        this._length = this.validateNumber(length);
        this._students = this.validateArray(students);
    }

    // Getter and setter for 'name'
    get name() {
        return this._name;
    }

    set name(value) {
        this._name = this.validateString(value);
    }

    // Getter and setter for 'length'
    get length() {
        return this._length;
    }

    set length(value) {
        this._length = this.validateNumber(value);
    }

    // Getter and setter for 'students'
    get students() {
        return this._students;
    }

    set students(value) {
        this._students = this.validateArray(value);
    }

    // Helper function to validate string
    validateString(value) {
        if (typeof value === 'string') {
            return value;
        } else {
            throw new Error('Name must be a string');
        }
    }

    // Helper function to validate number
    validateNumber(value) {
        if (typeof value === 'number') {
            return value;
        } else {
            throw new Error('Length must be a number');
        }
    }

    // Helper function to validate array
    validateArray(value) {
        if (Array.isArray(value)) {
            return value;
        } else {
            throw new Error('Students must be an array of strings');
        }
    }
}

export default HolbertonCourse;
