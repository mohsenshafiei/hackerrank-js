function sum(total, v) { return total + parseInt(v); }

function trempoline(fn) {
  return function trempoline(...args) {
    let result = fn(...args);
    while (typeof result === "function") {
      result = result();
    }
    return result;
  }
};

const superDigit = trempoline(function f(num) {
  const arr = num.split('');
  if (arr.length === 1) {
    return arr[0];
  } else {
    return f(arr.reduce(sum, 0).toString());
  }
});

console.log(superDigit((2332).toString()));
