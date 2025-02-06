// Map vs Filter
const num = [1, 2, 3, 4, 5, 6];

const res = num.map((i) => {
  if (i % 2 === 0) {
    return i;
  } else {
    return null;
  }
});

console.log(res);

const res2 = num.filter((i) => i);
console.log(res2);
