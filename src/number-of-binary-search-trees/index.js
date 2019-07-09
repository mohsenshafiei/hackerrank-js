/* global BigInt */
function trempoline(fn) {
  return function trempoline(...args) {
    let result = fn(...args);
    while (typeof result === "function") {
      result = result();
    }
    return result;
  }
};

const numberOfBinarySearchTrees = trempoline((n, arr) => {
  let summation = BigInt(0);
  let temp = arr.slice(0);
  if ( n < 0) {
    return BigInt(0);
  }
  if (n <= 1) {
    return BigInt(1);
  }
  for (let i = 1 ; i <= n ; i++ ) {
    if (temp[i -1] <= 0) {
      temp[i - 1] = numberOfBinarySearchTrees(i - 1 , temp);
    }
    if (temp[n - i] <= 0) {
      temp[n - i] = numberOfBinarySearchTrees(n - i , temp);
    }
    summation += temp[i - 1] * temp[n - i]
  }
  return summation;
});

const nodes = 31;
let arr = Array(nodes).fill(BigInt(-1));
console.log(numberOfBinarySearchTrees(nodes, arr));
