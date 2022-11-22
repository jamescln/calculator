// global varibales
const calcBtns = document.querySelectorAll(".number-button");
const screen = document.querySelector(".screen");

let numA = "";
let numB = "";
let operator = "";
let operatorPresent = false;
let calculationComplete = false;

let currentDisplay = "";

// calculation functions

const addNumbers = function (num1, num2) {
  return Number(num1) + Number(num2);
};

const subtractNumbers = function (num1, num2) {
  return Number(num1) - Number(num2);
};

const multiplyNumbers = function (num1, num2) {
  return Number(num1) * Number(num2);
};

const divideNumbers = function (num1, num2) {
  if (num1 === "0" || num2 === "0") {
    return "Nice Try.";
  } else {
    return Number(num1) / Number(num2);
  }
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
  return String(result);
};

// dom manipulation & events

calcBtns.forEach((calcBtns) =>
  calcBtns.addEventListener("click", (e) => {
    if (e.target.textContent === "CE") {
      numA = "";
      numB = "";
      operator = "";
      operatorPresent = false;
    } else if (
      e.target.textContent === "/" ||
      e.target.textContent === "*" ||
      e.target.textContent === "-" ||
      e.target.textContent === "+"
    ) {
      if (operatorPresent === false && numA !== "") {
        operator = e.target.textContent;
        operatorPresent = true;
      } else if (numA !== "") {
        numA = operate(operator, numA, numB);
        numB = "";
        operator = e.target.textContent;
        calculationComplete = true;
      } else {
        return;
      }
    } else if (e.target.textContent === "=") {
      if (numA === "" || numB === "" || operator === "") {
        return;
      }
      numA = operate(operator, numA, numB);
      numB = "";
      operator = "";
      operatorPresent = false;
      calculationComplete = true;
    } else {
      if (operatorPresent === false) {
        if (calculationComplete === true) {
          numA = "";
          calculationComplete = false;
        }
        numA += e.target.textContent;
      } else {
        numB += e.target.textContent;
      }
    }
    screen.textContent = `${numA} ${operator} ${numB}`;
  })
);

screen.textContent = currentDisplay;
