// Double equal(==) vs triple equal(===)
// always use ===
// equal comparison doesn't work for non-primitive(array,object)

const first = [45, 54, 98];
const second = [45, 54, 98];
if (first === second) {
  console.log("values are equal");
} else {
  console.log("values are not equal");
}
const num1 = 5;
const num2 = "5";
if (num1 == num2) console.log("Both numbers are equal");
else console.log("Both numbers are not equal");

// == follow
// type coercion
// type conversion
// type casting

/*
== -> only check the value equality
=== -> Check value and type is equality
*/
