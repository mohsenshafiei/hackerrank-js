const updateList = (...args) => {
  return args.map(element => Math.abs(element));
}

console.log(updateList(2,2,3,4,5,-5));
