// JSON placeholder, GET data, display data on UI

/* 
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json)) 

  */

// format
// fetch(url)
// .then(response => response.json())
// .then(json => console.log(json))

function loadData() {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json));
}
