/*
    1. Write an arrow function that will take 3 parameters, will multiply the parameters and will return the result.
*/

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const multiplyResult = multiply(5, 8, 5);
console.log(multiplyResult);

/*
    2. Write the following sentence in three lines and print the result:
    I am a web developer. I love to code. I love to eat biryani.

*/

const backTick = `I am a web Developer.
I love to code.
I love to eat Biryani.`;
console.log(backTick);

/*
    3. Write an arrow function that will take 2 parameters: One parameter will come from you and other parameter will be a default parameter. Add those two parameters and return the result.

*/
const defaultParameter = (value1, value2 = 3) => value1 + value2;
console.log(defaultParameter(6));
// console.log(defaultParameter(1,3));

/*
    4. Write an arrow function where it will do the following:
    a) It will take an array where the array elements will be the name of your friends.
    b) Check if the length of each element is even, push elements with even length to a new array and return the result.

    print the result - 

*/
const arrayArrow = arr => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length % 2 === 0) newArr.push(arr[i]);
  }
  return newArr;
};
const evenFriends = arrayArrow(['ChatGpt','Devin','Deepseek','Gemini']);
console.log(evenFriends);

/*
    5. Write an arrow function where it will do the following: 
    a) Square each array element
    b) Calculate the sum of the squared elements
    c) Return the average of the sum of the squared elements.

    print the result -

*/
const squareAverage = arr => {
    const squareArr = [];
    let sum = 0
    let average = 0;
    for(let i=0; i< arr.length; i++){
        squareArr.push(Math.pow(arr[i],2));
        sum += squareArr[i];
    }
   average = sum / arr.length;
   return average.toFixed(2);
}

const arraySquareAverage = squareAverage([2,2,2]);
console.log(arraySquareAverage);
/*
    6. Write an arrow function where it will do the following:
    a) It will take two array inputs
    b) Combine the two arrays and assign them in a new array
    c) Find the maximum number from the new array and return the result
    
    Print the result -

*/
const maxOfArray = (arr1,arr2) => {
      return Math.max(...arr1,...arr2);
}
const maxNumber = maxOfArray([700,53,19,45],[65,10,28,55]);
console.log(maxNumber);

/*
    ******** Common ES6 Interview Questions ********
    
    1. What is es6? Have you ever used anything from ES6?

    2. Explain the difference between var, let and const.

    3. What is the arrow function, and how to create it?

    4. Give an example of an arrow function is ES6? list down its advantages.

    5. Discuss spread operator in ES6 with an example.

    6. What do you understand about default parameters?

    7. What are template literals in ES6?

    8. Tell us the difference between arrow and regular function.

    9. Tell us the difference between seal and freeze.

    10. Tell us the difference between for..of and for..in.

*/
