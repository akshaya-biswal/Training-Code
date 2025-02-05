const fun1 = () => {
  console.log("Start");

  const a = 10;
  const b = 20;

  setTimeout(() => {
    console.log(a + b);
  }, 5000);

  setTimeout(() => {
    console.log("End");
  }, 2000);

  console.log("Completed");
};

fun1();
