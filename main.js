// calculation functions

const addNumbers = function (num1, num2) {
  return num1 + num2;
};

const subtractNumbers = function (num1, num2) {
  return num1 - num2;
};

const multiplyNumbers = function (num1, num2) {
  return num1 * num2;
};

const divideNumbers = function () {
  return num1 / num2;
};

const operate = function (operator, num1, num2) {
  let result;
  if (operator === "+") {
    result = addNumbers(num1, num2);
  } else if (operator === "-") {
    result = subtractNumbers(num1, num2);
  } else if (operator === "*") {
    result = multiplyNumbers(num1, num2);
  } else if (operator === "/") {
    result = divideNumbers(num1, num2);
  } else {
    return "error";
  }
  return result;
};