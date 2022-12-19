var plusOne = function (digits) {
  let number = "";
  let newArr = [];
  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    number += digits[i];
  }

  console.log("Number: ", Number(number));

  if (number.length > 6) {
    sum = BigInt(number) + BigInt(1);
  } else {
    sum = Number(number) + 1;
  }

  console.log("Cəm: ", sum);

  for (let j = 0; j < sum.toString().length; j++) {
    newArr.push(Number(sum.toString()[j]));
  }

  return newArr;
};

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));
