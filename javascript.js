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
clearBtn.addEventListener('click', () => {
    console.log('clear button clicked!');

});

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
let result;

let counter = 0;

btnArray.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let target = e.target;
        
        if (counter > 0) {
            console.log('clearing screen');
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

            if (result != undefined) {
                firstValue = String(result);
                secondValue = '';
                console.log(`fv: ${firstValue}  op: ${operator}  sv: ${secondValue}  result: ${result}`);
            }
        }
    });
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