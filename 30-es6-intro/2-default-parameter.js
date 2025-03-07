// default -> if value is not provided, take this as a default
// when parameter is number
function add(num1 = 0, num2 = 0) {
  const sum = num1 + num2;
  console.log(num1, num2, sum);
  return sum;
}
// const result = add(5,7);
const result = add(5);

// when parameter is string
function client(firstName,lastName = '') {
    const fullName = firstName + ' ' + lastName;
    return fullName;
}

// when parameter is array
function collection(price = []){

}
// when parameter is object
function person(student = {}){

}
/*
Default function parameters allow named parameters
to be initialize with default values if no argument or undefine is passed.
*/