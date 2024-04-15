let operand1, operand2, operator;

const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    if (b === 0) throw Error('Zero division not possible');

    return a / b;
}

const operate = (op1, sign, op2) => {
    switch (sign) {
        case '+':
            return add(op1, op2);
        case '-':
            return subtract(op1, op2);
        case '*':
            return multiply(op1, op2);
        case '/':
            return divide(op1, op2);
    }
}