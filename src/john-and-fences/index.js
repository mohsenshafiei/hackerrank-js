function filterRight(pivot, arr, location) {
  return arr.reduce((result, fence, index) => {
    if (fence < pivot && index > location) {
      return {
        ok: true,
        list: result.list
      }
    }
    if (fence >= pivot && index > location && result.ok === false) {
      return {
        ok: false,
        list: [...(result.list), fence]
      }
    }
    return result;
  }, { list: [], ok: false}).list;
};

function filterLeft(pivot, arr, location) {
  return arr.reduce((result, fence, index) => {
    if (fence < pivot && index > location) {
      return {
        ok: true,
        list: result.list
      }
    }
    if (fence >= pivot && index < location && result.ok === false) {
      return {
        ok: false,
        list: [...(result.list), fence]
      }
    }
    return result;
  }, { list: [], ok: false}).list;
};

function maxRectangle(arr) {
  let list = [];
  arr.forEach((pivot, index) => {
    const right = filterRight(pivot, arr, index);
    const left = filterLeft(pivot, arr, index);
    list.push(pivot * (right.length + left.length + 1));
  });
  return Math.max(...list);
}

console.log(maxRectangle([2,5,7,4,1,8])); //12
