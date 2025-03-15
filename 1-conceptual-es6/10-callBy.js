const arr = [27,32,36,19];
const number = 5;

// call by value primitive type
function callByValue(n){
    n += 1;
    console.log(n);
}
// primitive pass value
callByValue(number);
console.log('Still number value is - ', number);

// call by reference for non-primitive type
function callByReference(arr){
    arr.push(30);
    console.log(arr);
}
// non primitive pass reference
callByReference(arr);
console.log('Source array is also change - ',arr);
