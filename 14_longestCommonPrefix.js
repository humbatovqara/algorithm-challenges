var longestCommonPrefix = function (strs) {
  let myStr = "";

  if (strs.length == 1) {
    return strs[0];
  }

  for (let i = 0; i < strs[0].length; i++) {
    let slice = strs[0][i];
    let res = false;

    for (let j = 1; j < strs.length; j++) {
      if (slice == strs[j][i]) {
        res = true;
      } else {
        res = false;
        break;
      }
    }

    if (res) {
      myStr += slice;
    } else {
      break;
    }
  }

  return myStr;
};

console.log(longestCommonPrefix(["a"]));
