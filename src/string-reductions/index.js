const stringReducer = (str) => {
  const temp = str.split('');
  const result = temp.reduce((res, st) => {
    res.indexOf(st) < 0 ? res.push(st) : res;
    return res;
  }, []);
  return result.join('');
}

const str = 'pprrqq';
console.log(stringReducer(str));
