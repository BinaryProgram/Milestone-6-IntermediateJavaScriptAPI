// foreach, filter, find, and differences between them

/*
    ******* foreach *******
    Purpose: Executes a function for each element in an array.
    Return Value: undefined (does not return anything).
    Use Case: When you need to perform an operation (like logging or modifying external variables) on each item but do not need a return value.
*/
const numbers = [5, 3, 7, 9, 2];

const foreachResult = numbers.forEach((num) => console.log(num));
console.log(foreachResult); // return undefine

/*
    ******* filter *******
    Purpose: Creates a new array with elements that satisfy a condition.
    Return Value: A new array with matching elements.
    Use Case: When you need to extract specific elements from an array.

*/
const ufcPlayer = [
  "jon jones",
  "alex pereira",
  "dricus du plessis",
  "belal muhammad",
  "ilia topuria",
];
const playerHeight = [193, 191, 183, 178, 173];

const highHeight = playerHeight.filter((h) => h > 178);
console.log(highHeight);
const evenLengthPlayer = ufcPlayer.filter((ufc) => ufc.length % 2 === 0);
console.log(evenLengthPlayer);
const checkFilter = playerHeight.filter(height => height>193);
console.log(checkFilter); // return empty array

/*
    ******* find *******
    Purpose: Returns the first element that satisfies a condition.
    Return Value: The first matching element or undefined if no match is found.
    Use Case: When you need to find a single element, not all matches.
*/
const findHeight = playerHeight.find(firstHeight => firstHeight > 193 );
console.log(findHeight);