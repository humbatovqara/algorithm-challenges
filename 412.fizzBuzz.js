var fizzBuzz = function (n) {
  const arr = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 15 !== 0) {
      arr.push("Fizz");
    } else if (i % 5 == 0 && i % 15 !== 0) {
      arr.push("Buzz");
    } else if (i % 15 == 0) {
      arr.push("FizzBuzz");
    } else {
      arr.push(i.toString());
    }
  }

  return arr;
};

console.log(fizzBuzz(15));
