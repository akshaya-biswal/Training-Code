const api1 = fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) =>
  res.json()
);

const api2 = fetch("https://jsonplaceholder.typicode.com/todos/invalid").then(
  (res) => {
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
  }
);

Promise.any([api1, api2])
  .then((data) => console.log("Then", data))
  .catch((err) => console.log("Catch", err));
