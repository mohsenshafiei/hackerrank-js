const requiredToRemove = (len1, len2, lcm) => (len1 - lcm) + (len2 - lcm);

const longestCommonSubsequence = (str1, str2) => {
  let temp = Array(str1.length).fill(Array(str2.length).fill(0));
  for (let i = 0 ; i < str1.length ; i++) {
    for (let j = 0 ; j < str2.length ; j++) {
      if (str1[i] === str2[j]) {
        temp[i][j] = (i > 0 && j > 0) ? temp[i - 1][j -1] + 1 : 1;
      } else {
        temp[i][j] = Math.max((j > 0 ? temp[i][j -1] : 0), (i > 0 ? temp[i - 1][j] : 0));
      }
    }
  }
  return temp[str1.length - 1][str2.length - 1];
}


const str1 = 'salam';
const str2 = 'sal';
const lcm = longestCommonSubsequence(str1, str2);
const result = requiredToRemove(str1.length, str2.length, lcm);
console.log(result);
