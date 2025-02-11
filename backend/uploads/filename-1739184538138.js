const input = document.getElementById("input");
const numbers = document.getElementsByClassName("number");
const operators = document.getElementsByClassName("operator");
const ac = document.getElementById("ac");
const evaluate = document.getElementById("evaluate");
const decimal = document.getElementById("decimal");
const clear = document.getElementById("clear");
const changeSign = document.getElementById("changeSign");
const percentage = document.getElementById("percentage");
const history=document.querySelector(".history");
let expression = [];
const calculationHistory=[];
const evaluateExpression = () => {//function to evaluate expression
    if (expression.length === 3) {
        const num1 = Number(expression[0]);
        const operator = expression[1];
        const num2 = Number(expression[2]);
        let answer;
        switch (operator) {
            case '+': answer = num1 + num2;
                break;
            case '-': answer = num1 - num2;
                break;
            case 'X': answer = num1 * num2;
                break;
            case '/': answer = num1 / num2;
                break;
            case '^': answer = Math.pow(num1, num2);
                break;
            default:
                break;
        }
        calculationHistory.push(expression.join(" ")+` = ${answer}`)
        const div=document.createElement("div");
        div.innerText=calculationHistory[calculationHistory.length-1];
        div.classList.add("dropdown-item")
        history.appendChild(div);

        return (answer % 1 === 0) ? answer : answer.toFixed(3);
    }
    return "invalid expression";
};

Array.from(numbers).forEach((number) => {
    number.addEventListener("click", () => {
        if (expression.length !== 1) {
            if (expression.length === 3) {//previous expression has been evaluated
                input.value = "";
                expression = [];
            }
            if ((isNaN(input.value) || input.value === "Infinity") && input.value !== ".") input.value = "";
            if (number.innerHTML === "." && String(input.value).includes(".")) return;
            input.value = input.value + number.innerHTML;
        } else {
            expression.push(input.value);
            input.value = number.innerHTML;
        }
    });
});

Array.from(operators).forEach((operator) =>
    operator.addEventListener("click", () => {
        if (expression.length === 0 && input.value !== "") {
            expression.push(input.value);
            input.value = operator.innerHTML;
        }
        else if (expression.length === 1)
            input.value = operator.innerHTML;
        else if (expression.length === 2) {
            expression.push(input.value);
            const ans = evaluateExpression();
            expression = []
            expression.push(ans)
            input.value = operator.innerHTML;
        }
        else if (expression.length === 3 && input.value !== "Infinity" && !isNaN(input.value)) {
            expression = [];
            expression.push(input.value);
            input.value = operator.innerHTML;
        }
    })
);

evaluate.addEventListener("click", () => {
    if (expression.length === 2 && input.value !== "") {
        expression.push(input.value);
        const ans = evaluateExpression();
        input.value = ans;
    }
});

ac.addEventListener("click", () => {
    expression = [];
    input.value = "";
});

clear.addEventListener('click', () => {
    if (isNaN(input.value) || input.value === "Infinity" || input.value === "-Infinity") ac.click();
    else input.value = String(input.value).slice(0, -1);
})

changeSign.addEventListener('click', () => {
    if (!isNaN(input.value))
        input.value = -(Number(input.value));
})

percentage.addEventListener('click', () => {
    if (!isNaN(input.value))
        input.value = Number(input.value) / 100;
})

input.addEventListener('keydown', e => e.preventDefault())