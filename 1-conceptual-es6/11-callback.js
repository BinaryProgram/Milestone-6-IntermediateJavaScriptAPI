function callFromCallback(staff,salary){
console.log(staff,' monthly salary is ', salary);
}

function mainFunction(staff,salary,callBackFunction){
    console.log("Inside callBack function");
    setTimeout(() => {
        callBackFunction(staff,salary)
    },2000);
}
mainFunction('Anna',25000,callFromCallback);


// callback function structure

const function1 = (a, b, callback) => {
  callback(a, b);
};

const callback = (x, y) => {
  console.log("sum = ", x + y);
};

function1(27, 8, callback);