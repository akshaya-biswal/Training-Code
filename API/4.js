const getData = new Promise((res, rej) => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((data) => res(data))
    .catch((err) => rej(err));
});

getData.then((data) => console.log(data)).catch((err) => console.log(err));
