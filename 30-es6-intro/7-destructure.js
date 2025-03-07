// (advanced) Object and Array Destructure
/*
    Destructuring simplifies data extraction and improves readability. It's especially useful when working with arrays, objects, and function parameters.
*/
const actor = {
  aName: "Siam",
  age: 32,
  phone: "01717653333",
  money: 1242324434,
};

// const aName = actor.name;
// const age = actor.age;
// const phone = actor.phone;
// const money = actor.money;
// console.log(aName,age,phone,money);

// destructure the object -> left-right side are object
// object property and destructure property will be same.
const { aName, age, phone, money } = actor;
console.log(aName, age, phone, money);

// destructure array -> left - right side are array
const numbers = [25,27];
const [n1,n2] = numbers;
console.log(n1,n2);

// destructure function
function  multiply(a,b){
    return [a*5,b*5];
}
const [mult1,mult2] = multiply(5,6);
console.log(mult1,mult2);
