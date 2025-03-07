//  Array map to do one line loop magic
/*
    map() is a method available on arrays that creates a new array by applying a provided function to each element of the original array. It does not modify the original array but returns a transformed version.

    callback: A function that executes on each element.

    map - loops through each element of the array and do the operation that you passed in the call back
    function and hold the result from each operation in an array and finally returns you the transform array.

*/
const numbers = [4, 3, 6, 7, 9];

// const doubled = [];
// for(const num of numbers){
//     const double = num*2;
//     doubled.push(double);
// }
// console.log(doubled);

// use normal function with map
function doubleIt(number) {
  console.log("number now", number);
  return number * 2;
}
const doubleResult = numbers.map(doubleIt);
console.log(doubleResult);

// use arrow function with map
const doubleArrow = (number) => number * 2;
const mapResult = numbers.map(doubleArrow);
console.log(mapResult);

// handy way
const finalMap = numbers.map((number) => number * 2);
console.log(finalMap);
const half = numbers.map((number) => number / 2);
console.log(half);
const bonus = numbers.map((number) => number + 5);
console.log(bonus);

const student = ["Wink", "Denver", "Oliver", "Partik"];
const nameLength = student.map((studentName) => studentName.length);
console.log(nameLength);

const firstLetter = student.map((first) => first[0]);
console.log(firstLetter);
