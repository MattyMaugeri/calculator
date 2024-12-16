const grid = document.querySelector('.grid');
const clearBtnsContainer = document.querySelector('.clearBtnsContainer');
const numberGrid = document.querySelector('.numberGrid');
const symbolGrid = document.querySelector('.symbolGrid');

const operatorArray = ['/', 'x', '-', '+', '='];


// Create CE button
const clearEntryBtn = document.createElement('button');
clearEntryBtn.textContent = 'CE';
clearEntryBtn.classList.add('clearBtn');
clearBtnsContainer.appendChild(clearEntryBtn);

// Create Clear button
const clearBtn = document.createElement('button');
clearBtn.textContent = 'C';
clearBtn.classList.add('clearBtn');
clearBtnsContainer.appendChild(clearBtn);


// Create number grid
grid.appendChild(numberGrid);
for (let i = 9; i >= 0; i--) {
    let number = document.createElement('button');
    number.textContent = i;
    number.classList.add('number');
    number.id = `btn${i}`;
    numberGrid.appendChild(number);
}

// Create symbol grid
for (let i = 0; i < operatorArray.length; i++) {
    let symbol = document.createElement('button');
    symbol.classList.add('symbol');
    symbol.id = `sym${i}`;
    symbol.textContent = operatorArray[i];
    symbolGrid.appendChild(symbol);
}


let firstNumber = '';
let secondNumber = '';
let operator = '';
let firstHalf = true;
let secondHalf = false;

// Display selected button on the screen
const screen = document.querySelector('.screen');
screen.textContent = '';

const numberBtns = document.querySelectorAll('.number');
let btnArray = Array.from(numberBtns);
btnArray.reverse();

const symbolBtns = document.querySelectorAll('.symbol');
let symbolArray = Array.from(symbolBtns);

function operation() {
    btnArray.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            if (firstHalf) {
                let currentBtn = e.target.innerHTML;
                firstNumber += currentBtn;
            }
        });

        if (secondHalf) {
            btn.addEventListener('click', (e) => {
                let currentBtn = e.target.innerHTML;
                secondNumber += currentBtn;
            });
        }
    });

    if (!firstHalf && !secondHalf) {
        operate(firstNumber, operator, secondNumber);
    }
}

symbolArray.forEach((symbol) => {
    symbol.addEventListener('click', (e) => {
        let currentSymbol = e.target.innerHTML;
        if (currentSymbol === '=') {
            secondHalf = false;
            operation();
        } else {
            firstHalf = false;
            secondHalf = true;
            operator = currentSymbol;
            operation();
        }
    });
});

operation();


function addition(a, b) {
    console.log(a + b);
    return a + b;
}

function subtraction(a, b) {
    console.log(a - b);
    return a - b;
}

function multiplication(a, b) {
    console.log(a * b);
    return a * b;
}

function division(a, b) {
    console.log(a / b);
    return a / b;
}

function operate(a, op, b) {

    switch (op) {
        case '+':
            console.log('Its addition');
            addition(parseInt(a), parseInt(b));
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