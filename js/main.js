const numberButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(element => document.getElementById(`btn-${element}`));
numberButtons.forEach((numberButton, index) => numberButton.addEventListener('click', () => numbersClick(index)));

const equalButton = document.getElementById('equal');
const periodButton = document.getElementById('period');

const inputString = document.getElementById('input');
const resultString = document.getElementById('result-text');

const delButton = document.getElementById('btn-del');
const divButton = document.getElementById('btn-div');
const timesButton = document.getElementById('btn-x');
const subButton = document.getElementById('btn-sub');
const plusButton = document.getElementById('btn-plus');

const numbersClick = number => {
  const actualText = inputString.textContent;
  inputString.textContent = actualText === '0' && number === '0'
    ? '0'
    : actualText === '0'
    ? number
    : `${actualText}${number}`;
};

const equalClick = () => {
  const expression = inputString.textContent.replace('x', '*');
  resultString.textContent = math.evaluate(expression);
};

const periodClick = () => {
  const actualText = inputString.textContent;
  const indexes = [
    actualText.lastIndexOf('-'),
    actualText.lastIndexOf('/'),
    actualText.lastIndexOf('+'),
    actualText.lastIndexOf('x')
  ];
  const lastOperatorIndex = Math.max(...indexes);
  const lastNumberFromLastSymbol = actualText.substring(lastOperatorIndex+1);
  inputString.textContent = `${actualText}${lastNumberFromLastSymbol.indexOf('.') >= 0 ? '' : '.'}`;
};

const delClick = () => inputString.textContent = 0;

const setOperatorText = operator => {
  const actualText = inputString.textContent;
  const regex = RegExp('(.*[0-9])[-,x,/,+,.]$');  
  inputString.textContent = `${regex.test(actualText) ? actualText.slice(0, -1) : actualText}${operator}`;
};

equalButton.addEventListener('click', equalClick);
periodButton.addEventListener('click', periodClick);
delButton.addEventListener('click', delClick)

divButton.addEventListener('click', () => setOperatorText('/'));
timesButton.addEventListener('click', () => setOperatorText('x'));
subButton.addEventListener('click', () => setOperatorText('-'));
plusButton.addEventListener('click', () => setOperatorText('+'));
