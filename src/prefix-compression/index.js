const prefixCompression = (str1, str2) => {
  let prefix = '';
  for (let i = 0; i < Math.min(str1.length, str2.length); i++) {
    if (str1[i] === str2[i]) {
      prefix += str1[i];
    } else {
      break;
    }
  }
  const res1 = str1.slice(prefix.length, str1.length);
  const res2 = str2.slice(prefix.length, str2.length);
  console.log(prefix.length, prefix);
  console.log(res1.length, res1);
  console.log(res2.length, res2);
}

prefixCompression('abcdefpr', 'abcpqr');
prefixCompression('kitkat', 'kit');
prefixCompression('puppy', 'puppy');
