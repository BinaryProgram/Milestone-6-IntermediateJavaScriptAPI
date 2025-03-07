// var doesn't follow block scope. It create hoisting issue.
/*
  Hoisting is javaScript's default behavior of moving all
  declarations to the top of the current scope.
*/
function add(a, b) {
  // var current = undefine hoisted here  
  const total = a + b;
  if (b > 5) {
    const sum = 25 + a + b;
  } else {
    const sum = 5 + a + b;
    var current = sum;
  }
  console.log(current);
  return total;
}
// console.log(a,b);
// console.log(total);
add(5, 3);

// hoisting
// print5() is hoisted, I can call it from anywhere. Cause hoisting bring it top of every statement
// print5();

// console.log(print10);
// print10();
for(let i = 0; i< 5; i++){
    // console.log(i);
}
// console.log('outside', i);

//function declaration is hoisted. I can call is before it define.
function print5(){
    console.log('inside print5', 5);
}
// function expression(assign to a variable) is not hoisted.
var print10 = function(){
    console.log('inside print10', 10);
}
