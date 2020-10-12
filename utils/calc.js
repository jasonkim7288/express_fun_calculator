var numWords = require('number-to-words');
var calc = {};

const num = n => (cb = null) => cb ? cb(n) : n;

var strNum = '';
const numFunc = process.env.NODE_ENV === 'production' ? 1000000 : 10000
for (let i = 1; i < numFunc; i++) {
  strNum = numWords.toWords(i).replace(/[,]/g, '').split(/[ -]/).map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
  console.log('function created:', strNum);
  // var nineThousand = num(9000);
  //                  = (cb = null) => cb ? cb(9000) : 9000;
  eval(`var ${strNum} = num(${i});`);
  eval(`module.exports['${strNum}'] = ${strNum};`);
}
const returnFixed4 = num => Number.isInteger(num) ? num : +num.toFixed(4)
// nineThousand(plus(one())) = nineThousand(b => 1 + b);
//                            = 9001
const plus = a => b => returnFixed4(a + b);
const minus = a => b => returnFixed4(a - b);
const multiply = a => b => returnFixed4(a * b);
const divide = a => b => returnFixed4(a / b);

const strFuncToResult = (str) => {
  eval(`var retVal = ${str};`);
  return retVal;
}

module.exports['plus'] = plus;
module.exports['minus'] = minus;
module.exports['multiply'] = multiply;
module.exports['divide'] = divide;

module.exports['strFuncToResult'] = strFuncToResult;
