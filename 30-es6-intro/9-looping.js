// for of, for in, Module Summary and Practice Problems
/*
   -> for of for array and string
   -> for in for object
*/
const  numbers = [1,3,5,4,6];
for(const num of numbers){
    console.log(num);
}
const name = 'JavaScript DOM';
for(const char of name){
    console.log(char);
}


const product = {
  items: "Power strip",
  price: 800,
  source: "China",
  color: "White",
};
// for(const key of product){
//     console.log(key);
// }

for(const key in product){
    const value = product[key];
    console.log(key,value);
}

// optional
const keys = Object.keys(product);
for(const key of keys){
    const value = product[key];
    console.log(key,value);
}