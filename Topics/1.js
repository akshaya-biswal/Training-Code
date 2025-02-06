function hello() {
  return new Promise((res) => {
    const time = Math.floor(Math.random() * 500) + 1;
    setTimeout(() => {
      console.log("Hello");
      res();
    }, time);
  });
}

function world() {
  return new Promise((res) => {
    const time = Math.floor(Math.random() * 500);
    setTimeout(() => {
      console.log("World");
      res();
    }, time);
  });
}

async function verify() {
  await hello();
  await world();
}

verify();

// hello()
//   .then(() => world())
//   .catch((err) => console.log(err));
