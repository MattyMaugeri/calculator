const mainGrid = document.querySelector('.mainGrid');
const clearBtnsContainer = document.querySelector('.clearBtnSection');
const numberGrid = document.querySelector('.numberSection');
const operatorColumn = document.querySelector('.operatorColumn');
const extraSection = document.querySelector('.extraSection');
const maxDigits = 9;


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

let dotCounter = 0;
let digitCounter = 0;


// extra section
const dotBtn = document.createElement('button');
dotBtn.textContent = '.';
dotBtn.id = 'dot';

dotBtn.addEventListener('click', () => {
    if (digitCounter < maxDigits) {
        digitCounter++;
        if (dotCounter == 0) {
            screen.textContent += '.';
            dotCounter++;
        }
    }

});

const zeroBtn = document.createElement('button');
zeroBtn.textContent = 0;
zeroBtn.classList.add('number');
zeroBtn.id = 'btn0';

mainGrid.appendChild(extraSection);
extraSection.appendChild(dotBtn);
extraSection.appendChild(zeroBtn);


// Create operator column
for (let i = 0; i < operatorArray.length; i++) {
    let operator = document.createElement('button');
    operator.classList.add('operator');
    operator.id = `op${i}`;
    operator.textContent = operatorArray[i];
    operatorColumn.appendChild(operator);
}

const numberBtns = Array.from(document.querySelectorAll('.number'));
const operatorBtns = Array.from(document.querySelectorAll('.operator'));

// Display selected button on the screen
const screen = document.querySelector('.screen');

let firstValue = '';
let secondValue = '';
let operator = '';
let result = 0;

// Counter determines when to clear the screen
let counter = 0;

numberBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let target = e.target;
        if (digitCounter < maxDigits) {
            digitCounter++;
            if (counter > 0) {
                screen.textContent = '';
                counter--;
            }
            screen.textContent += target.innerHTML;
        }
    });
});

// console.log(`fv: ${firstValue}  op: ${operator}  sv: ${secondValue}`);


operatorBtns.forEach((op) => {
    op.addEventListener('click', (e) => {
        let currentOperator = e.target;
        counter++;
        dotCounter = 0;
        digitCounter = 0;

        if (currentOperator.innerHTML === '=') {
            secondValue = screen.textContent;
            operate(parseFloat(firstValue), operator, parseFloat(secondValue));
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
                operate(parseFloat(firstValue), operator, parseFloat(secondValue));
                console.log(result);
                screen.textContent = result;
            }
            operator = currentOperator.innerHTML;

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
    digitCounter = 0;
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
    digitCounter = 0;
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