// Load more data, more APIs, send data to function

function loadData2() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((Response) => Response.json())
    .then((json) => console.log(json));
}

function users() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => loadUsers(data));
}
function loadUsers(data) {
  console.log(data);
}
