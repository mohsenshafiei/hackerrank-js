const validateEquality = (colors) => {
  return ((colors.green === colors.red) && (colors.yellow === colors.blue));
}

const validatePrefixDistance = (colors) => {
  if (Math.abs(colors.red - colors.green) > 1) {
    return false;
  }
  if (Math.abs(colors.blue - colors.yellow) > 1) {
    return false;
  }
  return true;
}

const validate = (str) => {
  let ok = true;
  const final = str.split('').reduce((result, character) => {
    switch (character) {
      case 'R':
        result = {
          ...result,
          red: result.red + 1,
        }
        break;
      case 'G':
        result = {
          ...result,
          green: result.green + 1,
        }
        break;
      case 'B':
        result = {
          ...result,
          blue: result.blue + 1,
        }
        break;
      case 'Y':
        result = {
          ...result,
          yellow: result.yellow + 1,
        }
        break;
      default:
    }
    if (ok === true) {
      ok = validatePrefixDistance(result);
    }
    return result;
  }, {
    red: 0,
    blue: 0,
    green: 0,
    yellow: 0,
  });
  return ok && validateEquality(final);
}

console.log(validate('RYRB'));
