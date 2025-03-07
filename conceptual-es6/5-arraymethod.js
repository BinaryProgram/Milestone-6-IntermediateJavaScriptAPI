// map(), foreach(), filter(), find() and reduce()

const arr = [45, 23, 64, 34, 25];
// foreach return nothing doesn't modify the array
arr.forEach((number) => console.log(number));

// map return new array and doesn't modify source array
const bonus = arr.map((num) => num + 10);
console.log(bonus);
console.log(arr);

// filter return new array which condition meet or return empty array
const small = arr.filter((num) => num > 65);
console.log(small);

// find return first which condition meet or undefine
const even = arr.find((num) => num % 2 === 0);
console.log(even);

// Reduces an array to a single value (sum, product, object, etc.). Return a single accumulated value
const total = arr.reduce((pre, current) => pre + current, 0);
console.log(total);
