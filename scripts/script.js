/*
    1 = plus
    2 = minus
    3 = multiply
    4 = divide
 */
let g_operator = 1;
let g_firstNumber = 0;
let g_resetDisplay = true;
let g_powerState = true;
let g_easterEggArray = ['\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', 'A', 'C', 'C', 'E', 'S', 'S', '\xa0', 'G', 'R', 'A', 'N', 'T', 'E', 'D', '.', '.', '.', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '_'];
document.getElementById('display').innerHTML = "0";
document.getElementById('powerStateBtn').style.color = "#30F270";
document.getElementById("display").style.backgroundColor = '';




function reinit() {
    if (g_powerState === false)
        return;
    g_operator = 1;
    g_firstNumber = 0;
    g_resetDisplay = true;
    document.getElementById('display').innerHTML = "0";
}

function calculate() {
    if (document.getElementById('display').innerHTML === '1.2.3') {
        averyEasterEgg(0);
        g_resetDisplay = true;
        return;
    }
    if (g_powerState === false)
        return;
    doOperation();
    g_operator = 1;
}

function appendNum(number) {
    if (g_powerState === false)
        return;
    if (g_resetDisplay === true) {
        g_resetDisplay = false;
        document.getElementById('display').innerHTML = number;
    }
    else {
        document.getElementById('display').innerHTML += number;
    }
}

function setOperator(operator) {
    if (g_powerState === false)
        return;
    if (g_resetDisplay === false) {
        doOperation();
    }
    g_operator = operator;
}

function doOperation() {
    if (g_powerState === false)
        return;
    switch (g_operator) {
        case 1: {
            g_firstNumber += Number(document.getElementById('display').innerHTML);
            break;
        }
        case 2: {
            g_firstNumber -= Number(document.getElementById('display').innerHTML);
            break;
        }
        case 3: {
            g_firstNumber *= Number(document.getElementById('display').innerHTML);
            break;
        }
        case 4: {
            g_firstNumber /= Number(document.getElementById('display').innerHTML);
            break;
        }
        default: {
            console.log('error');
            break;
        }
    }
    document.getElementById('display').innerHTML = g_firstNumber;
    g_resetDisplay = true;
}

function appendDot() {
    if (g_powerState === false)
        return;
    if (g_resetDisplay === true) {
        g_resetDisplay = false;
        document.getElementById('display').innerHTML = "0.";
    }
    else {
        document.getElementById('display').innerHTML += ".";
    }
}

function powerState() {
    if (g_powerState === true) {
        g_powerState = false;
        document.getElementById('display').innerHTML = '';
        document.getElementById("powerStateBtn").style.color = '';
        document.getElementById("display").style.backgroundColor = 'grey';


    }
    else {
        g_powerState = true;
        reinit();
        document.getElementById("powerStateBtn").style.color = '#30F270';
        document.getElementById("display").style.backgroundColor = '';

    }
}

function averyEasterEgg(index) {
    for (let i = 0; i < 10; i++) {
        if (i === 0) {
            document.getElementById('display').innerHTML = g_easterEggArray[i+index];
        }
        else {
            document.getElementById('display').innerHTML += g_easterEggArray[i+index];
        }
    }
    if (index <= 26) {
        setTimeout(averyEasterEgg, 250, index + 1)
    }
}