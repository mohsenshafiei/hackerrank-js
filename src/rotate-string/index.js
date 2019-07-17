const rotateString = (str) => {
  let counter = 0;
  let result = [];
  let temp = str;
  while (counter < str.length) {
    const firstCharacter = temp.charAt(0);
    temp = temp.slice(1, temp.length).concat(firstCharacter);
    result.push(temp);
    counter++;
  }
  return result;
}

console.log(rotateString('abs'));
