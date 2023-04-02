const zero = document.querySelector('#numZero');
const one = document.querySelector('#numOne');
const two = document.querySelector('#numTwo');
const three = document.querySelector('#numThree');
const four = document.querySelector('#numFour');
const five = document.querySelector('#numFive');
const six = document.querySelector('#numSix');
const seven = document.querySelector('#numSeven');
const eight = document.querySelector('#numEight');
const nine = document.querySelector('#numNine');

const equalsButton = document.querySelector('#equals');
const addButton = document.querySelector('#add');
const substractButton = document.querySelector('#substract');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');
const deleteLastButton = document.querySelector('#deleteLast');
const clearButton = document.querySelector('#clearButton');

const displayedNumber = document.querySelector('#screenDiv');

addNumberListeners();
addOperationListeners();

let actualNumber = 0;
let nextNumber = 0;
let memory = [0];
let operation = "none";

displayedNumber.textContent = `${actualNumber}`;


//builds the next number that will be used
function numberBuilder(number) {
    nextNumber = nextNumber * 10 + number;
    memory.push(nextNumber);
    console.log(`nextNumber: ${nextNumber}`);
}

//Deletes the last digit from the number that is displayed
function deleteLast() {
    if (memory.length > 1) {
        memory.pop();
        nextNumber = memory[memory.length - 1];
        console.log(`nextNumber: ${nextNumber}`);
        console.log(`Last number in array: ${memory[memory.length - 1]}`);
        displayedNumber.textContent = `${nextNumber}`;
        console.log(`Length of the array: ${memory.length}`);
    } else {
        emptyMemory();
        nextNumber = 0;
        displayedNumber.textContent = `${nextNumber}`;
    }
}

//empty memory
function emptyMemory() {
    memory = [];
    memory[0] = 0;
}

//resets the program
function reset(){
    emptyMemory();
    actualNumber = 0;
    nextNumber = 0;
    operation = "none";
    displayResult();
}

//these functions contain the logic of the operations and get called by equals to be executed
function addition() {
    actualNumber = actualNumber + nextNumber;
}
function substraction() {
    actualNumber = actualNumber - nextNumber;
}
function multiplication() {
    actualNumber = actualNumber * nextNumber;
}
function division() {
    if(nextNumber == 0){
        return alert("You can not divide by 0!!!");
    }
    actualNumber = actualNumber / nextNumber;
}

//executes the selected operation with nextNumber's actual state
function equals() {
    switch (operation) {
        case 'addition':
            addition();
            break;
        case 'substraction':
            substraction();
            break;
        case 'multiplication':
            multiplication();
            break;
        case 'division':
            division();
            break;
        default:
            addition();
    }
    emptyMemory();
    operation = "none";
}

//displays the result of the last operation
function displayResult() {
    displayedNumber.textContent = `${actualNumber}`;
    console.log(`The solution is: ${actualNumber}`);
}

//this function adds all the necessary eventlisteners
function addNumberListeners() {
    //These eventlisteners call the numberBuilder function to build a new number and display it on the screen
    zero.addEventListener('click', () => {
        numberBuilder(0);
        displayedNumber.textContent = `${nextNumber}`;
    });
    one.addEventListener('click', () => {
        numberBuilder(1);
        displayedNumber.textContent = `${nextNumber}`;
    });
    two.addEventListener('click', () => {
        numberBuilder(2);
        displayedNumber.textContent = `${nextNumber}`;
    });
    three.addEventListener('click', () => {
        numberBuilder(3);
        displayedNumber.textContent = `${nextNumber}`;
    });
    four.addEventListener('click', () => {
        numberBuilder(4);
        displayedNumber.textContent = `${nextNumber}`;
    });
    five.addEventListener('click', () => {
        numberBuilder(5);
        displayedNumber.textContent = `${nextNumber}`;
    });
    six.addEventListener('click', () => {
        numberBuilder(6);
        displayedNumber.textContent = `${nextNumber}`;
    });
    seven.addEventListener('click', () => {
        numberBuilder(7);
        displayedNumber.textContent = `${nextNumber}`;
    });
    eight.addEventListener('click', () => {
        numberBuilder(8);
        displayedNumber.textContent = `${nextNumber}`;
    });
    nine.addEventListener('click', () => {
        numberBuilder(9);
        displayedNumber.textContent = `${nextNumber}`;
    });
}

function addOperationListeners() {
    //sets the next operation upon clicks
    addButton.addEventListener('click', () => {
        if (nextNumber != 0) {
            equals();
            displayResult();
            nextNumber = 0;
        }
        operation = 'addition';
        console.log('addition');
    });
    substractButton.addEventListener('click', () => {
        if (nextNumber != 0) {
            equals();
            displayResult();
            nextNumber = 0;
        }
        operation = 'substraction';
        console.log('substraction');
    });
    multiplyButton.addEventListener('click', () => {
        if (nextNumber != 0) {
            equals();
            displayResult();
            nextNumber = 0;
        }
        operation = 'multiplication';
        console.log('multiplication');
    });
    divideButton.addEventListener('click', () => {
        if (nextNumber != 0) {
            equals();
            displayResult();
            nextNumber = 0;
        }
        operation = 'division';
        console.log('division');
    });

    //when clicked calls equals() to execute the next operation
    equalsButton.addEventListener('click', () => {
        equals();
        displayResult();
        nextNumber = 0;
    });

    //when clicked calls deleteLast() to delete the last digit of nextNumber
    deleteLastButton.addEventListener('click', () => deleteLast());

    //when clicked resets the program with reset()
    clearButton.addEventListener('click', () => reset());
}