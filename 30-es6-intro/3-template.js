// Template string, multiple line string, dynamic string

const first = 'Saklain';
const last = 'Mostak';
const myName = first + ' ' + last;
console.log(myName);

const a = 10;
const b = 17;
const sum =  'The sum of ' + a + " and " +b + " is " + (a+b);
console.log(sum);

//  `` -> backtick
const result = `The sum of ${a} and ${b} is ${a+b}`;
console.log(result);

// To write multiple line in this way is messy
const about = 'Hello Jack \n' + 'How are you? \n' + 'How is your family?'
console.log(about);

// `` -> using backtick is way more easy clean.
const message = `Hello Jack
How are you?
How is your family?`;
console.log(message);

//using `` and ${}(template string) for array and object
const arr = [1,5,3,7,8];
const list = {name:'Rose', age: 2};
const identity = `Her name is ${list.name}. Age and roll no ${list.age} and ${arr[2]}`;
console.log(identity);