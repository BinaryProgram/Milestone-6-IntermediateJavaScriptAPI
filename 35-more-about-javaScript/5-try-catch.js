// Error Handling: try, catch, throw and finally
function checkAge() {
  const ageField = document.getElementById("age");
  const ageText = ageField.value;
  const errorTag = document.getElementById("error");

  try {
    const age = parseInt(ageText);

    if (isNaN(age)) {
      throw "Please enter a number";
    } else if (age < 18) {
      throw "bacha kaccha not allowed";
    } else if (age > 30) {
      throw "murobbi ra aikhan aisen na ";
    }
    errorTag.innerHTML = "";
  } catch (err) {
    console.log("ERROR:", err);
    errorTag.innerHTML = "ERROR:" + err;
  } finally {
    console.log("All done inside try catch");
  }
  console.log(11111);
}
/*
  If an error occurs in the try block, the catch block is executed. If there is no error, the catch block is skipped. The finally block is always executed, whether there is an error or not.
  If there is an possibility of an error in the code, it is a good practice to use try catch block to handle the error.
  If we don't use try catch block, the code will stop executing when an error occurs.
  The throw statement is used to throw an error manually.
  The catch block takes an argument that is the error message.
  The finally block is used to execute some code after the try catch block.
  The finally block is always executed
  
  When to use try catch throw and finally ->
  - When you want to handle the error in a specific way
  - When you want to show a specific message to the user
  - When you want to log the error in the console
  - When you want to execute some code after the try catch block
  - When you want to stop the execution of the code after an error
  - When you want to throw an error manually

*/