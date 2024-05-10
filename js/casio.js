document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    var userInput = document.getElementById("user-in");
    var resetButton = document.getElementById("reset");
    var equalButton = document.getElementById("equal");

    // Add event listeners to number buttons
    var numberButtons = document.querySelectorAll(".f-l");
    numberButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            userInput.textContent += button.textContent;
        });
    });

    // Add event listener to reset button
    resetButton.addEventListener("click", function () {
        userInput.textContent = "";
    });

    // Add event listener to equal button
    equalButton.addEventListener("click", function () {
        var expression = userInput.textContent;
        var result = evaluateExpression(expression);
        userInput.textContent = result;
    });
});

// Function to evaluate the expression
function evaluateExpression(expression) {
    try {
        // Replace all occurrences of '^' with '**' for exponentiation
        expression = expression.replace(/\^/g, '**');

        // Split the expression into tokens (numbers and operators)
        var tokens = expression.match(/(\d+(\.\d+)?|\+|\-|\*|\/)/g);

        // Initialize the stack for operands and operators
        var operands = [];
        var operators = [];

        // Iterate through each token
        tokens.forEach(function (token) {
            if (token.match(/\d+(\.\d+)?/)) {
                // If the token is a number, push it onto the operand stack
                operands.push(parseFloat(token));
            } else {
                // If the token is an operator, handle it based on precedence
                while (operators.length > 0 && precedence(token) <= precedence(operators[operators.length - 1])) {
                    // Pop the top two operands and the top operator from the stacks
                    var operand2 = operands.pop();
                    var operand1 = operands.pop();
                    var operator = operators.pop();

                    // Apply the operator to the operands and push the result onto the operand stack
                    operands.push(applyOperator(operand1, operand2, operator));
                }
                // Push the current operator onto the operator stack
                operators.push(token);
            }
        });

        // Perform remaining operations in the stacks
        while (operators.length > 0) {
            var operand2 = operands.pop();
            var operand1 = operands.pop();
            var operator = operators.pop();
            operands.push(applyOperator(operand1, operand2, operator));
        }

        // The final result is the only value left in the operand stack
        return operands.pop();
    } catch (error) {
        return "Error";
    }
}

// Function to determine operator precedence
function precedence(operator) {
    switch (operator) {
        case '+':
        case '-':
            return 1;
        case '*':
        case '/':
            return 2;
        case '^':
            return 3;
        default:
            return 0;
    }
}

// Function to apply the operator to the operands
function applyOperator(operand1, operand2, operator) {
    switch (operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            return operand1 / operand2;
        case '^':
            return Math.pow(operand1, operand2);
        default:
            throw "Invalid operator";
    }
}
