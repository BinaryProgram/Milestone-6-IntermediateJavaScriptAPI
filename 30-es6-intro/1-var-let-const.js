/*
var - no reason to use var
let - allow it to reassign
const - do not allow it to reassign
*/
const money = 25;
// money = 50; 
const rich = money + 25;
console.log(rich);

let cnt = 0;;
cnt = cnt +1;
console.log(cnt);

const number = [1,3,4,6,7];
// number = [5,7,8,10];
number[3] = 9;
number.push(32,27,29);
console.log(number);

// object
const student = {
    name:'Rehad',
    class: 10
}
// student = {name:"Rehad Khan"};
student.name = 'Rehad Khan';
console.log(student);

// loop
let sum = 0;
// const sum = 0;
for(let i=0; i<10; i++){
    const num = i;
    sum = sum +num;
}
console.log(sum);