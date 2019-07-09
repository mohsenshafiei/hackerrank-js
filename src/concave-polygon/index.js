const createLine = (x1, y1, x2, y2) => {
  const line = {
    formula: `y - ${y1} = ${m}x ${(-1) * (m * x1) > 0 ? `+ ${(-1) * (m * x1)}` : (-1) * (m * x1)}`,
    m: (y2 - y1) / (x2 - x1)
  }
  return line;
}

const generateAllSubsetsWithLengthThree = (arr) => {
  
}

const concavePolygon = () => {
  const m1 = createLine().m;
  const m2 = createLine().m;
  console.log(Math.atan( (m2 - m1) / 1 + (m1 * m2)));
}

console.log(createLine(1,0,0,1));
