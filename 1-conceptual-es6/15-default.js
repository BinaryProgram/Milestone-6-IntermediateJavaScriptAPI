function sum(a=0,b=0){
    console.log(a+b);
}
sum(2);

// object destructuring 
const people = {
    position:'Junior Dev',
    age: 27,
}

// const designation = (obj) => {
//   const {position ,age} = obj;
//   console.log(position, age);
// }

// This props destructuring will use most in react
const designation = ({position,age}) => console.log(position,age);


designation(people);