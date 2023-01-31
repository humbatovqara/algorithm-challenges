var romanToInt = function (s) {
  var sdict = {
    "IV": 4,
    "IX": 9,
    "XL": 40,
    "XC": 90,
    "CD": 400,
    "CM": 900
}

var dict = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

var res = 0;
for (var i = 0; i < s.length; ++i) {
    if (s.substring(i, i + 2) in sdict) {
        res += sdict[s.substring(i, i + 2)];
        ++i;
    } else if (s[i] in dict) {
        res += dict[s[i]];
    }
}

return res;
};

console.log(romanToInt('789'));
