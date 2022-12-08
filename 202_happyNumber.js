var isHappy = function (n) {
  let arr = [];

  return isHappyCheck(n, arr);
};

var isHappyCheck = function (n, arr) {
  if (n === 1) {
    return true;
  }

  let result = 0;
  let changeString = n.toString();

  for (let i = 0; i < changeString.length; i++) {
    result += changeString[i] * changeString[i];
  }

  if (result === 1) {
    return true;
  } else if (result === 0 || arr.includes(result)) {
    return false;
  } else {
    arr.push(result);
    return isHappyCheck(result, arr);
  }
};

isHappy(2);
