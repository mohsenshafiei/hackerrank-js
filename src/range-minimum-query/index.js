const findMinimum = (args) => {
  return Math.min(...args);
}

const array = [10, 20, 30, 40, 11, 22, 33, 44, 15, 5];
console.log(findMinimum(array.slice(0, 5)));
