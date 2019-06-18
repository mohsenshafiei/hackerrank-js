const need = (a, k, h) => a + k * h;
const length = (arr) => arr.length;
const computeTotal = (arr, appetite, happiness, index) =>  {
  return arr.reduce((result, item) => {
    return result += need(appetite[item], (index + 1), happiness[item]);
  }, 0);
}

// greedy algorithm to always choose the minimum person cost
const maxFriendsToInvite = (mangoes, friends, appetite, happiness) => {
  let inviteList = [];
  let max = 0;
  let len = 0;
  for (let i = -1; i < length(friends); i++) {
    let personsConsume = friends.map(friend => need(appetite[friend], (i + 1), happiness[friend]));
    const select = personsConsume.indexOf(Math.min(...personsConsume));
    inviteList.push(friends[select]);
    friends.splice(select, 1);
    const total = computeTotal(inviteList, appetite, happiness, i);
    if (total > max && total <= mangoes) {
      max = total;
      len = length(inviteList);
    }
  }
  return len;
}

console.log(maxFriendsToInvite(200, [0, 1, 2, 3, 4], [2, 5, 3, 2, 4], [30, 40, 10, 20, 30]));
console.log(maxFriendsToInvite(100, [0, 1], [3, 4], [1, 2]));
