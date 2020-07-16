let display = document.querySelector("#result");
let operators = Array.from(document.querySelectorAll(".operator"));
const numbers = Array.from(document.querySelectorAll(".number"));
const operations = {
    "+": (a,b) => {
        return a + b;
    },
    "x": (a,b) => {
        return a * b;
    },
    "÷": (a,b) => {
        return (a / b);
    },
    "-": (a,b) => {
        return a - b;
    }
}
// format(exp) returns an array consisting for the numbers and
// operation present
// String -> Array
const format = (exp) => {
    let arr = exp.trim().split(" ");
    arr[0] = Number(arr[0]);
    arr[2] = Number(arr[2]);
    return arr;
}
const isExp = (exp) => {
    let arr = exp.trim().split(" ");
    if (arr.length === 3) {
        return true;
    } else {
        console.table(arr)
        return false;
    }
}
const addOperator = (exp) => {
    let arr = exp.textContent.trim().split(" ");
    if ((typeof(Number(arr[0])) === 'number') && (arr.length === 1)) {
        return true;
    } else {
        return false;
    }
}
// evaluate(arr) evaluates the array expression recieved from 
// the format function and return the answer
// Array -> Number
const evaluate = (arr) => {
    let answer = operations[arr[1]](arr[0],arr[2])
    return answer;
}
const addDisplay = (number) => {
    display.textContent +=  number.textContent.trim();
}
numbers.forEach((curr) => {
    curr.addEventListener('click',(e) => {
        addDisplay(curr);
    })});
operators.forEach((curr) => {
    curr.addEventListener('click', (e) => {
        if (isExp(display.textContent)) {
            display.textContent = evaluate(format(display.textContent));
            display.textContent += " "
            addDisplay(curr)
            display.textContent += " "
        } else if (addOperator(display)){
            display.textContent += " "
            addDisplay(curr)
            display.textContent += " "
        } 
    })
})

