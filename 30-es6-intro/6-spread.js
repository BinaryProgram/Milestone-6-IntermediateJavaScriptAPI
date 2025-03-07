//Spread operator, array max, copy arrays
/*
    The spread operator (...) in JavaScript is used to expand elements of an array, object, or iterable into individual elements. It is commonly used for copying, merging, and passing values efficiently.
*/
const max = Math.max(4,14,22,2,56,9,43,20);
console.log(max);

const numbers = [2,12,1,53,20,5,39,32];
const arrayMax = Math.max(...numbers);
// console.log(numbers);
console.log(arrayMax);

// Use spread operator to copy
//non-primitives dataTypes assignment is reference in js
const nums = [4,2,6,33,5,79];
const nums2 = [...nums]; // copy using spread operator
nums.push(27);
console.log(nums);
console.log(nums2);

const addNums2 = [...nums2,1]; // add extra elements while copy.
console.log(addNums2);

