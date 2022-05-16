var isPalindrome = function (x) {
    let opposing = [];
    let str = x.toString()

    for (let i = str.length - 1; i >= 0; i--) {
        opposing.push(str[i])
    }

    let opposingNumber = +opposing.join('');

    return x === opposingNumber ? true : false
};

console.log(isPalindrome(121));