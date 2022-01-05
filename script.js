function getOutput() {
    let theOutput = document.getElementById('output').textContent;
    return theOutput
}

function printHistory(history) {
    document.getElementById('history').innerText = history;
}

function printOutput(num){
    document.getElementById('output').innerText = num;
}

function formattedNumber(num) {
    var n = Number(num)
    var value = n.toLocaleString("en")
    return value
}

var output = getOutput()

const numbers = document.getElementsByClassName('number')
for(var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function() {
        if(this.id !== NaN) {
            output = output + this.id
            printOutput(output)
        }
    })
}

const operators = document.getElementsByClassName('operator')
for(var i=0; i<operators.length; i++) {
    operators[i].addEventListener('click', function() {
        if(this.id == 'equal') {
            printHistory(output)
            output = eval(output)
            printOutput(output)
        }
        if(this.id == 'division') {
            output = output + this.innerText;
            printOutput(output)
        }
        if(this.id == 'multiply') {
            output = output + this.innerText;
            printOutput(output);
        }
        if(this.id == 'subtract') {
            output = output + this.innerText;
            printOutput(output)
        }
        if(this.id == 'add') {
            output = output + this.innerText;
            printOutput(output)
        }
        if(this.id == 'dot') {
            output = output + this.innerText;
            printOutput(output)
        }
        if(this.id == 'modulo') {
            output = output + this.innerText;
            printOutput(output)
        }
        if(this.id == 'pos-neg') {
            if(output == '') {
                output = output + document.getElementById('subtract').innerText;
                printOutput(output)
            }
            else if(output == '-') {
                output = '';
                printOutput(output)
            }
        }
        if(this.id == 'clear') {
            output = '';
            printHistory(output)
            printOutput(output)
        }
        if(this.id == 'backspace'){
            output = output.slice(0, -1)
            printOutput(output)
        }
    })
}


