// Dynamically display loaded data on your website

function dynamicUser(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => displayUsers(data));
}
// Dynamically displaying fetch data from another website.
function displayUsers(data){
    const ul = document.getElementById('user-list');
    for(const user of data){
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.append(li);
    }
}

function deleteAPost() {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  });
}

function patchAPost() {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    body: JSON.stringify({
      title: "foo",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function createAPost() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}