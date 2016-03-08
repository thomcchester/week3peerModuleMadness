var generateRandomNumber = require("./generateRandomNumber.js");
var balance = require("./convertToDollar.js");


var sum = function () {
  var convertSum = balance(generateRandomNumber(100, 10000));
  return convertSum;
};


var totalBalance = "Account blance :\n";

module.exports.totalBalance = totalBalance;
module.exports.sum = sum;
