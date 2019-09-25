const button0 = document.getElementById('btn-0');
const button1 = document.getElementById('btn-1');
const button2 = document.getElementById('btn-2');
const button3 = document.getElementById('btn-3');
const button4 = document.getElementById('btn-4');
const button5 = document.getElementById('btn-5');
const button6 = document.getElementById('btn-6');
const button7 = document.getElementById('btn-7');
const button8 = document.getElementById('btn-8');
const button9 = document.getElementById('btn-9');
const equalButton = document.getElementById('equal');
const periodButton = document.getElementById('period');

const inputString = document.getElementById('input');
const resultString = document.getElementById('result');

const delButton = document.getElementById('btn-del');
const divButton = document.getElementById('btn-div');
const timesButton = document.getElementById('btn-x');
const subButton = document.getElementById('btn-sub');
const plusButton = document.getElementById('btn-plus');

const numbersClick = number => {
  alert(number);
};

const equalClick = () => {
  alert('equal')
};

const periodClick = () => {
  alert('period');
};

const delClick = () => {
  alert('-');
};

const divClick = () => {
  alert('/');
};

const timesClick = () => {
  alert('*');
};

const subClick = () => {
  alert('-');
};

const plusClick = () => {
  alert('+');
};

button0.addEventListener('click', () => numbersClick(0));
button1.addEventListener('click', () => numbersClick(1));
button2.addEventListener('click', () => numbersClick(2));
button3.addEventListener('click', () => numbersClick(3));
button4.addEventListener('click', () => numbersClick(4));
button5.addEventListener('click', () => numbersClick(5));
button6.addEventListener('click', () => numbersClick(6));
button7.addEventListener('click', () => numbersClick(7));
button8.addEventListener('click', () => numbersClick(8));
button9.addEventListener('click', () => numbersClick(9));

equalButton.addEventListener('click', equalClick);
periodButton.addEventListener('click', periodClick);

delButton.addEventListener('click', delClick)
divButton.addEventListener('click', divClick)
timesButton.addEventListener('click', timesClick)
subButton.addEventListener('click', subClick)
plusButton.addEventListener('click', plusClick)
