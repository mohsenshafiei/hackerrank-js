const computeMaxHourGlasses = (arr) => {
  let max = Number.NEGATIVE_INFINITY;
  for (let i = 0 ; i < arr.length - 2  ; i++) {
    for (let j = 0 ; j < arr[i].length - 2 ; j++) {
      let temp = 0;
      for (let k = 0; k < 3 ; k++) {
        for (let l = 0 ; l < 3; l++) {
          if ( (k !== 1 && l !== 0) || (k !== 1 && l !== 2) ) {
            temp += arr[i + k][j + l];
          }
          if ( k === 1  && l === 1) {
            temp += arr[i + k][j + l];
          }
        }
      }
      if (max < temp) {
        max = temp;
      }
    }
  }
  return max;
}

const arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];

const arr2 = [
  [0, -4, -6, 0, -7, -6],
  [-1, -2, -6, -8, -3, -1],
  [-8, -4, -2, -8, -8, -6],
  [-3, -1, -2, -5, -7, -4],
  [-3, -5, -3, -6, -6, -6],
  [-3, -6, 0, -8, -6, -7]
]

console.log(computeMaxHourGlasses(arr)); // 19
console.log(computeMaxHourGlasses(arr2)); // -19
