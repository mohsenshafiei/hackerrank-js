function sum(total, v) { return total + parseInt(v); }

function superDigit(num) {
  const arr = num.split('');
  if (arr.length === 1) {
    return arr[0];
  } else {
    return superDigit(arr.reduce(sum, 0).toString());
  }
}
console.log(superDigit((2332).toString()));
