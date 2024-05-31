// Calculate the time it takes between a setTimeout call and the inner function actually running

function sum(a, b) {
  let t1 = performance.now();

  let sum = a + b;

  let t2 = performance.now();

  console.log("time taken for the inner function to run: ", t2 - t1);

  return sum;
}

let t3 = performance.now();
setTimeout(() => {
  console.log(sum(62464665, 579878977));
}, 1000);
let t4 = performance.now();
console.log("Time taken by setTimeout function: ", t4 - t3);
