const grid = document.querySelector('.grid');
const clearBtnsContainer = document.querySelector('.clearBtnsContainer');
const numberGrid = document.querySelector('.numberGrid');
const symbolGrid = document.querySelector('.symbolGrid');

const symbolArray = ['/', 'X', '-', '+', '='];


function createGrid() {
    const clearEntryBtn = document.createElement('button');
    clearEntryBtn.textContent = 'CE';
    clearEntryBtn.classList.add('clearBtn');
    clearBtnsContainer.appendChild(clearEntryBtn);

    const clearBtn = document.createElement('button');
    clearBtn.textContent = 'C';
    clearBtn.classList.add('clearBtn');
    clearBtnsContainer.appendChild(clearBtn);

    grid.appendChild(numberGrid);

    // Number Grid
    for (let i = 9; i >= 0; i--) {
        let number = document.createElement('button');
        number.textContent = i;
        number.classList.add('number');
        number.classList.add(`n${i}`);
        numberGrid.appendChild(number);
    }

    // Symbol Grid
    for (let i = 0; i < symbolArray.length; i++) {
        let symbol = document.createElement('button');
        symbol.classList.add('symbol');
        symbol.classList.add(`s${i}`);
        symbol.textContent = symbolArray[i];
        symbolGrid.appendChild(symbol);
    }
}

createGrid();

const buttons = document.querySelector('.buttons');
buttons.addEventListener('click', () => {
    console.log('hello');
});




let firstNumber;
let secondNumber;
let operator;

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
            addition(a, b);
            break;
        case '-':
            console.log('Its subtraction');
            subtraction(a, b);
            break;
        case '*':
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