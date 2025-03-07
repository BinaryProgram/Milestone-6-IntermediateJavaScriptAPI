// practice problem map,filter,find and reduce
/*
    1) You have an odd array (array with odd numbers) - [1,3,5,7,9].
    Now convert this array into an even
    array (array with even numbers).
    [2,4,6,8,10]. Do this using for loop and array.map() method.
*/
const oddNum = [1, 3, 5, 7, 9];
const evenNum = oddNum.map((num) => num + 1);
console.log(evenNum);

/*
    You are given an array say: [30,50,79,78,90,101,30]. Now return/get 
    all the elements which are divisible by 10 using array.filter()
    method.
    Do this using array.find() also.
    Then compare the output of these.

*/
const myArray = [30, 50, 79, 78, 90, 101, 30];
const filterDivisible = myArray.filter((num) => num % 10 === 0);
console.log(filterDivisible);
const findDivisible = myArray.find((num) => num % 10 === 0);
console.log(findDivisible);

/*
    3) You have an array of object:
    const instructor = [
    {name:'Nodi', age:28,position:'Senior'},{name:'Akil', age:26,position:'Junior'},
    {name:'Shobuj', age:28,position:'Senior'}
    ]
    
    Your task is to display the instructor names that has the 
    position senior using filter
*/
const instructor = [
  { name: "Nodi", age: 28, position: "Senior" },
  { name: "Akil", age: 26, position: "Junior" },
  { name: "Shobuj", age: 28, position: "Senior" },
];
const seniorName = [];
const seniorInstructorName = instructor.filter((positionName) => {
  if (positionName.position === "Senior") seniorName.push(positionName.name);
});
console.log(seniorName);
/*
    4) You have an array of object:
    const people = [
    {name:'Nodi', age:16},{name:'Akil', age:26},
    {name:'Shobuj', age:18}
    ]
    use array.reduce() method to find the sum of people age.
*/
const people = [
    {name:'Nodi', age:16},{name:'Akil', age:26},
    {name:'Shobuj', age:18}
    ]
const sumAge = people.reduce((accumulate,current) => (accumulate + current.age),0);
console.log(sumAge);
/*
   ******* Common interview questions *******
   1. what is the different between map,foreach,filter?
   2. What's the different between filter and find??
   3. What is the different between  for..of and for..in?
   4. How do tou empty an array?
   5. Difference between class and object?
   6. What is the prototype chain? or how does inheritance work in javaScript?
   7. What does destructuring do in es6;
   8. Is optional chaining is same as ternary operator?
   9. What do you mean by dot notation and bracket notation? When should you use dot notation or bracket  notation?

*/
