const mainGrid = document.querySelector('.mainGrid');
const clearBtnsContainer = document.querySelector('.clearBtnSection');
const numberGrid = document.querySelector('.numberSection');
const symbolGrid = document.querySelector('.symbolColumn');
const extraSection = document.querySelector('.extraSection');


const operatorArray = ['/', 'x', '-', '+', '='];



// Create number grid
mainGrid.appendChild(numberGrid);
for (let i = 9; i >= 1; i--) {
    let number = document.createElement('button');
    number.textContent = i;
    number.classList.add('number');
    number.id = `btn${i}`;
    numberGrid.appendChild(number);
}

// extra section
const dotBtn = document.createElement('button');
dotBtn.textContent = '.';
dotBtn.classList.add('dot')

const zeroBtn = document.createElement('button');
zeroBtn.textContent = 0;
zeroBtn.classList.add('number');
zeroBtn.id = 'btn0';

mainGrid.appendChild(extraSection);
extraSection.appendChild(dotBtn);
extraSection.appendChild(zeroBtn);


// Create symbol grid
for (let i = 0; i < operatorArray.length; i++) {
    let symbol = document.createElement('button');
    symbol.classList.add('symbol');
    symbol.id = `sym${i}`;
    symbol.textContent = operatorArray[i];
    symbolGrid.appendChild(symbol);
}

const numberBtns = document.querySelectorAll('.number');
const btnArray = Array.from(numberBtns);
btnArray.reverse();

const symbolBtns = document.querySelectorAll('.symbol');
const symbolArray = Array.from(symbolBtns);

// Display selected button on the screen
const screen = document.querySelector('.screen');

let firstValue = '';
let secondValue = '';
let operator = '';
let result = 0;

// Counter determines when to clear the screen
let counter = 0;

btnArray.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let target = e.target;

        if (counter > 0) {
            screen.textContent = '';
            counter--;
        }
        screen.textContent += target.innerHTML;
    });
});

// console.log(`fv: ${firstValue}  op: ${operator}  sv: ${secondValue}`);

symbolArray.forEach((symbol) => {
    symbol.addEventListener('click', (e) => {
        counter++;
        let currentSymbol = e.target;

        if (currentSymbol.innerHTML === '=') {
            secondValue = screen.textContent;
            operate(parseInt(firstValue), operator, parseInt(secondValue));
            console.log(result);
            screen.textContent = result;
            firstValue = String(result);
            operator = '';
            console.log(`fv: ${firstValue}  op: ${operator}  sv: ${secondValue}  result: ${result}`);
            counter--;

        } else {

            if (firstValue == '') {
                firstValue = screen.textContent;
            } else if (secondValue == '') {
                secondValue = screen.textContent;
            }
            if (operator != '') {
                operate(parseInt(firstValue), operator, parseInt(secondValue));
                console.log(result);
                screen.textContent = result;
            }
            operator = currentSymbol.innerHTML;

            if (result != 0) {
                firstValue = String(result);
                secondValue = '';
                console.log(`fv: ${firstValue}  op: ${operator}  sv: ${secondValue}  result: ${result}`);
            }
            console.log(`fv: ${firstValue}  op: ${operator}  sv: ${secondValue}  result: ${result}`);
        }
    });
});


// Create CE button
const clearEntryBtn = document.createElement('button');
clearEntryBtn.textContent = 'CE';
clearEntryBtn.classList.add('clearBtn');
clearBtnsContainer.appendChild(clearEntryBtn);
clearEntryBtn.addEventListener('click', () => {
    if (secondValue != '') {
        result = 0;
        firstValue = '';
        secondValue = '';
        screen.textContent = '';
        console.log(`fv: ${firstValue}  op: ${operator}  sv: ${secondValue}  result: ${result}`);
    }
    screen.textContent = '';
});

// Create Clear button
const clearBtn = document.createElement('button');
clearBtn.textContent = 'C';
clearBtn.classList.add('clearBtn');
clearBtnsContainer.appendChild(clearBtn);
clearBtn.addEventListener('click', () => {
    result = 0;
    firstValue = '';
    secondValue = '';
    operator = '';
    console.log(`fv: ${firstValue}  op: ${operator}  sv: ${secondValue}  result: ${result}`);
    screen.textContent = '';
});


function addition(a, b) {
    result = a + b;
    return a + b;
}

function subtraction(a, b) {
    result = a - b;
    return a - b;
}

function multiplication(a, b) {
    result = a * b;
    return a * b;
}

function division(a, b) {
    result = a / b;
    return a / b;
}

function operate(a, op, b) {

    switch (op) {
        case '+':
            console.log('Its addition');
            addition(a, b);
            break;
        case '-':
            console.log('Its subtraction');
            subtraction(a, b);
            break;
        case 'x':
            console.log('Its multiplication');
            multiplication(a, b);
            break;
        case '/':
            console.log('Its division');
            division(a, b);
            break;
        default:
            break;
    }
}