// Arrow function, multiple parameter, function body - ES6

// function declaration
function add(a, b) {
  return a + b;
}
const sum = add(10, 40);

// function expression
const result = function (a, b) {
  return a + b;
};

// arrow function
const add2 = (a, b) => a+b; // implicit return
const sum2 = add2(15, 16);
console.log(sum2);

const multiply = (num1,num2,num3) => {return num1*num2*num3}; // explicit return
const multiplyResult = multiply(3,5,5);
console.log(multiplyResult);


