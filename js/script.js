const button1 = document.getElementById('1')
const button2 = document.getElementById('2')
const button3 = document.getElementById('3')
const button4 = document.getElementById('4')
const button5 = document.getElementById('5')
const button6 = document.getElementById('6')
const button7 = document.getElementById('7')
const button8 = document.getElementById('8')
const button9 = document.getElementById('9')
const button0 = document.getElementById('0')
const buttonPeriod = document.getElementById('.')
const buttonAdd = document.getElementById('+')
const buttonSubtract = document.getElementById('-')
const buttonMultiply = document.getElementById('*')
const buttonDivide = document.getElementById('/')
const buttonClear = document.getElementById('C')
const buttonEquals = document.getElementById('=')

const buttonClicked = ''
const display = document.getElementById('calc-text')

var newCalculation = true
var operating = false
var currentOperation = ''
var operand1 = 0
var calculation = ['0','0']

button1.addEventListener('click', button1_click)
function button1_click() {
    displayButtonNumber('1')
}

button2.addEventListener('click', button2_click)
function button2_click() {
    displayButtonNumber('2')
}

button3.addEventListener('click', button3_click)
function button3_click() {
    displayButtonNumber('3')
}

button4.addEventListener('click', button4_click)
function button4_click() {
    displayButtonNumber('4')
}

button5.addEventListener('click', button5_click)
function button5_click() {
    displayButtonNumber('5')
}

button6.addEventListener('click', button6_click)
function button6_click() {
    displayButtonNumber('6')
}

button7.addEventListener('click', button7_click)
function button7_click() {
    displayButtonNumber('7')
}

button8.addEventListener('click', button8_click)
function button8_click() {
    displayButtonNumber('8')
}

button9.addEventListener('click', button9_click)
function button9_click() {
    displayButtonNumber('9')
}

button0.addEventListener('click', button0_click)
function button0_click() {
    displayButtonNumber('0')
}

buttonPeriod.addEventListener('click', buttonPeriod_click)
function buttonPeriod_click() {
    if (!display.textContent.includes('.')){
        displayButtonNumber('.')
    }
}

buttonClear.addEventListener('click', buttonClear_click)
function buttonClear_click() {
    newCalculation = true
    displayButtonNumber('C')
}

buttonAdd.addEventListener('click', buttonAdd_click)
function buttonAdd_click() {
    currentOperation = 'add'
    setOpcode()
    display.textContent = '+'
    console.log(calculation[0])
    operating = true
    newCalculation = true
    checkDigitLimit()
}

buttonSubtract.addEventListener('click', buttonSubtract_click)
function buttonSubtract_click() {
    currentOperation = 'subtract'
    setOpcode()
    display.textContent = '-'
    operating = true
    newCalculation = true
    checkDigitLimit()
}

buttonMultiply.addEventListener('click', buttonMultiply_click)
function buttonMultiply_click() {
    currentOperation = 'multiply'
    setOpcode()
    display.textContent = '×'
    operating = true
    newCalculation = true
    checkDigitLimit()
}

buttonDivide.addEventListener('click', buttonDivide_click)
function buttonDivide_click() {
    currentOperation = 'divide'
    setOpcode()
    display.textContent = '÷'
    operating = true
    newCalculation = true
    checkDigitLimit()
}

buttonEquals.addEventListener('click', buttonEquals_click)
function buttonEquals_click() {
    setOpcode()
    console.log(calculation[0])
    console.log(calculation[1])
    
    if (currentOperation == 'add'){
        display.textContent = parseFloat(calculation[0]) + parseFloat(calculation[1])
    }
    else if (currentOperation == 'subtract'){
        display.textContent = parseFloat(calculation[0]) - parseFloat(calculation[1])
    }
    else if (currentOperation == 'multiply'){
        display.textContent = parseFloat(calculation[0]) * parseFloat(calculation[1])
    }
    else if (currentOperation == 'divide'){
        display.textContent = parseFloat(calculation[0]) / parseFloat(calculation[1])
    }
    operating = false
    checkDigitLimit()
}

function setOpcode(){
    if (!operating) {
        calculation[0] = display.textContent
    }
    else{
        calculation[1] = display.textContent
    }
}

function displayButtonNumber(num) {
    
    if (newCalculation){
        if (num == 'C'){
            display.textContent = '0' 
        }
        else{
            display.textContent = num
            newCalculation = false
        }
    }
    else{
        display.textContent += num
    }
    checkDigitLimit()
}

function checkDigitLimit() {
    console.log(display.textContent.length)
    if (display.textContent.length != 32 && display.textContent.length >= 20) {
        newCalculation = true
        console.log('he')
        display.textContent = "limit reached"
    }
}