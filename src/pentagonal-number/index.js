const getLast = (arr) => arr[arr.length -1];

const computePentagonalNumber = (n) => {
  if (n <= 1) {
    return 1;
  } else {
    let arr = [];
    let x = 4;
    arr.push(1);
    for (let i = 1; i < n ; i++) {
      arr.push(arr[i -1] + x);
      x += 3;
    }
    return getLast(arr);
  }
}

console.log(computePentagonalNumber(5));
