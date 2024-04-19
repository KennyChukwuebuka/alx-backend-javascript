/* eslint-disable */
/*
Create a function named cleanSet that returns a string of 
all the set values that start with a specific string (startString).

It accepts two arguments: a set (Set) and a startString (String).

When a value starts with startString you only append the rest 
of the string. The string contains all the values of the set separated by -
 */


function cleanSet(Set, startString) {
    let result = '';
    Set.forEach(value => {
      if (value.startsWith(startString)) {
        const cleanedValue = value.slice(startString.length);
        result += (result === '' ? '' : '-') + cleanedValue;
      }
    });
    return result;
  }
  
  export default cleanSet;
  
  