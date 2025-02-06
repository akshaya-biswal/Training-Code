const name = "Hello World";

const obj1 = {
  name,
  age: 10,
  isLoggedIn: "Yes",
};

// fixed size

obj1 = null;
const { name: userName, age, isLoggedIn } = obj1;

console.log(userName, age, isLoggedIn);

const updatedObj1 = {
  ...obj1,
  eating: false,
  coding: true,
};

const { eating, ...res } = updatedObj1;

console.log(eating, res);
