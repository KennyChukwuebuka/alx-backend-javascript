/*eslint-disable */
/*
Create a function named groceriesList that returns a 
map of groceries with the following items (name, quantity): 
*/

export default function groceriesList() {
    const map = new Map();
    map.set('Apples', 10);
    map.set('Tomatoes', 10);
    map.set('Pasta', 1);
    map.set('Rice', 1);
    map.set('Banana', 5);
    return map;
}