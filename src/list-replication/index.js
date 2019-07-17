const listReplicator = (count, ...args) => {
  const temp = args.reduce((result, element) => {
    for (let i = 0 ; i < count ; i++) {
        result.push(element);
    }
    return result;
  }, []);

  return temp;
};

console.log(listReplicator(3, 1, 2, 3, 4, 5));
