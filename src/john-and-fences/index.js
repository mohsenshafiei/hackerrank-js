function filterRightAdjacent(key, arr) {
  return arr.reduce((obj, fence, index) => {
    if (fence < key && index > arr.indexOf(key)) {
      return {
        ok: true,
        list: obj.list
      }
    }
    if (fence > key && index > arr.indexOf(key) && obj.ok === false) {
      return {
        ok: false,
        list: [...(obj.list), fence]
      }
    }
    return obj;
  }, { list: [], ok: false}).list;
};

function filterLeftAdjacent(key, arr) {
  return arr.reduce((obj, fence, index) => {
    if (fence < key && index > arr.indexOf(key)) {
      return {
        ok: true,
        list: obj.list
      }
    }
    if (fence > key && index < arr.indexOf(key) && obj.ok === false) {
      return {
        ok: false,
        list: [...(obj.list), fence]
      }
    }
    return obj;
  }, { list: [], ok: false}).list;
};

function maxRectangle(arr) {
  arr.forEach(pivot => {
    const right = filterRightAdjacent(pivot, arr);
    const left = filterLeftAdjacent(pivot, arr);
    console.log(pivot, right, left, pivot * (right.length + left.length + 1));
  });
}

maxRectangle([2,5,7,4,1,8]);
