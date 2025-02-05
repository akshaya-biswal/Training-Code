// const obj1 = {
//   name: "Hello",
//   age: 100,
// };

// console.log(typeof obj1);

// const arr1 = [1, 2, 3, 3];
// console.log(typeof arr1);

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const person1 = new Person();
// console.log(typeof person1);

// const date = new Date();
// console.log(typeof date);

try {
  throw new Error("Something went wrong");
} catch (error) {
  console.log(error.message, typeof error);
}
