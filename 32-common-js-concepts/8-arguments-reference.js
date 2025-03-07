//function arguments pass by reference pass by value

// arguments

// array like object
function sum(a, b, c) {
  const args = [...arguments];
  // console.log(args);
  const result = a + b + c;
  return result;
}
// console.log(arguments);
const total = sum(45, 89, 12, 45, 98, 56);
// console.log(total);
console.log(sum.length);


// reference

// primitive types are pass by value(number,string,boolean)

let num1 = 5;
let num2 = 7;

function multiply(a, b){
    a = 27;
    const result = a * b;
    return result;
}
console.log(num1);
//num1 and num2 function value not change
multiply(num1, num2);
console.log(num1);

// object and array are pass by reference
let student1 = {name: 'Jalil', partner: 'borsha'};
let student2 = {name: 'raj', partner: 'anika'};

function makeMovie(couple1, couple2){
    couple1.name = 'Ononto';
    couple2.partner = 'mim';
}

console.log(student1, student2);
makeMovie(student1, student2);
// student1 and student2 values are also change outer scope of makeMovie function.
console.log(student1, student2);
