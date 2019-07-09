const factorial = (x) => (x < 1) ? 1 : x * factorial(x - 1);

const pascalTriangle = (n) => {
  for (let row = 0 ; row < n ; row++) {
    let line = [];
    for(let column = 0; column <= row ; column++) {
      line.push( factorial(row) / ( factorial(column) * factorial(row - column) ));
    }
    console.log(...line);
  }
}

pascalTriangle(12);
