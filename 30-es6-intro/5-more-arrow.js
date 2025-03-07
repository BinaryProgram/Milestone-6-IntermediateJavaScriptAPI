// More Arrow functions and big arrow function
const difference = (x, y) => x - y;
const multiply = (n1, n2, n3) => n1 * n3 * n2;

// single parameter or one parameter - implicit return
const getAge = person => person.age;
const men = { name: "Sharen", age: 31 };
const age = getAge(men);
console.log(age);

const getThird = numbers => numbers[2];
const third = getThird([4, 2, 6, 1, 20]);
console.log(third);

// no parameter
const getPI = () => Math.PI;
console.log(getPI());

// Large arrow function - explicit return
// If you want  to get anything returned from this function. Then you have to use the return keyword.
const simpleMath = (x, y, z) => {
  const sum = x + y + z;
  const mult = x * y * z;
  const result = sum + mult;
  return result;
};
/*
    # Use arrow functions when:
     - You need to preserve this in callbacks
     - You want shorter and cleaner syntax
     - You don't need arguments

    # Use regular functions when:
     - You need dynamic this
     - You are defining methods inside object
     - You need arguments or want to use new 
*/
