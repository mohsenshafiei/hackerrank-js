const maxValue = (...args) => Math.max(...args);
const sum = (total, v) =>  { return total + v; }

function rotateRight(dice) {
  return {
    top: dice.left,
    bottom: dice.right,
    left: dice.bottom,
    right: dice.top,
    front: dice.front,
    back: dice.back
  }
}

function rotateDown(dice) {
  return {
    top: dice.back,
    bottom: dice.front,
    left: dice.left,
    right: dice.right,
    front: dice.top,
    back: dice.bottom
  }
}

function pathFinder(x, y, dx, dy, rotation, dice, path, max) {
  let newMax = max;
  let down = 0;
  let right = 0;
  if (x <= dx && y <= dy) {
    let newPath = [...path, dice.top];
    newMax = max > newPath.reduce(sum, 0) ? max : newPath.reduce(sum, 0);
    down = pathFinder(x+1, y, dx, dy, 0, rotateDown(dice), newPath, newMax);
    right = pathFinder(x, y+1, dx, dy, 1, rotateRight(dice), newPath, newMax);
  }
  return maxValue(newMax, down, right);
}

const initialState = () => {
  return {
    top: 1,
    front: 2,
    left: 3,
    right: 4,
    back: 5,
    bottom: 6
  };
}

const dice = initialState();
console.log(pathFinder(1, 1, 3, 3, -1, dice, [], 0));
