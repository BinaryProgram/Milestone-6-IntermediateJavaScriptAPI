//global
//block scope(let,const)
//local scope or functional scope

console.log(globalVariable);
var globalVariable = "hoisted"; // not recommended

{
  let blockScope = "inside block";
  // const blockScope = 2
  console.log(blockScope);
  console.log(globalVariable);
  StillGlobal = "SOS"; // Not in use
}
// blockScope variable in not accessible outside the block
// referenceerror
// console.log(blockScope);

let check = "work";
function localScope() {
  let check = 'scope work';
  console.log(check);
  let functionScope = 3;
  console.log(functionScope);
}
localScope();
console.log(StillGlobal);
