var addBinary = function (a, b) {
  let binaryToNum1 = parseInt(a, 2);
  let binaryToNum2 = parseInt(b, 2);
  let sum = BigInt(binaryToNum1) + BigInt(binaryToNum2);
  let numToBinary = Number(sum).toString(2);

  return numToBinary;
};

console.log(addBinary(1010, 1011));
