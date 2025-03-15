const first = [1, 2, 3, 4, 5];

// const second = [];
// for (let i = 0; i<first.length; i++) {
//   second.push(first[i]);
// }
// use spreadOperator to do the same task easily
const second = [...first];
console.log(second);

// array destructuring

// const a = first[0];
// const b = first[1];
// const c = first[2];

const  [a,b,c,...d] = first; // rest parameter
console.log(a,b,c);
console.log(d);


