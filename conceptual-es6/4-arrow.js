const number = [4, 25, 6, 33, 62];
// hoisted issue
// const total = sum(number);
// function sum(num) {
//   let s = 0;
//   for (let i of num) {
//     s += i;
//   }
//   return s;
// }

// console.log(total);

// same task using arrow function - don't have hoisting issue
const sum = arr => {
    let t = 0;
    for(let i of arr) t+=i;
    return t; // explicit return must necessary
}

console.log(sum(number));

const add = (a,b) => a+b; // implicit return
console.log(add(2,5));

const bonus = b => b+10;
console.log(bonus(5));
