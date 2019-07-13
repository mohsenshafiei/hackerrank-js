const stringCompressor = (str) => {
  let temp = [];
  return str.split('').reduce((result, character) => {
    if (result[result.length - 1] === character) {
      temp.push(character);
    } else {
      if (temp.length > 0) {
        result.push(temp.length + 1);
      }
      temp = [];
      result.push(character);
    }
    return result
  },[]).join('');
}

const test = 'aae2ee';
console.log(stringCompressor(test));

const test1 = 'aaabaaaaccaaaaba';
console.log(stringCompressor(test1));
