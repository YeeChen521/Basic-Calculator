function add(a,b){
    return a +b ;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    if (b === 0){
        return "Zero Division Error"
    }else{
        return a / b;
    }

}
let a;
let b;
let op = ["+","-","*","/"];

const div = document.createElement("div");
const display = document.querySelector(".display");


function operate(op,a,b){
    if (op === "+"){
        return add(a,b);
    }else if (op === "-"){
        return subtract(a,b);
    }else if (op === "*"){
        return multiply(a,b);
    }else if (op === "/"){
        return divide(a,b);
    }
}
let resultDisplayed = false;
let arr = [];
const btns = document.querySelectorAll(".btn");
btns.forEach(btn => {
    btn.addEventListener("click", () => {
    const val =  btn.textContent;
    if (val === "Clear") {
        arr = [];
        display.value = "";
        resultDisplayed = false;
        return;
    }

    if (val === "="){
        let num1 = 0;
        let num2 = 0;
        let op2;
        for (i = 0 ; i < arr.length ; i ++){
            if ( op.includes(arr[i])){
                op2 = arr[i];
                num1 = Number(arr.slice(0, i).join(''));
                num2 = Number(arr.slice(i + 1).join(''));
                const result = operate(op2,num1,num2);
                display.value = result;
                arr = [result.toString()];
                resultDisplayed = true; 
                break;
            }
        }
        return;
    }
    if (resultDisplayed && !op.includes(val)) {
        arr = [];
        display.value = "";
        resultDisplayed = false;
    }
    if (resultDisplayed && op.includes(val)) {
        resultDisplayed = false; // allow continued input
    }    
    const lastItem = arr[arr.length - 1];
    if (op.includes(val) && op.includes(lastItem)) {
        arr[arr.length - 1] = val; // replace last operator
    } else {
        arr.push(val);
    }
    display.value = arr.join("");


    });
});
