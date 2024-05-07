document.addEventListener("DOMContentLoaded", function() {
    // Get elements
    var userInput = document.getElementById("user-in");
    var resetButton = document.getElementById("reset");
    var equalButton = document.getElementById("equal");

    // Add event listeners to number buttons
    var numberButtons = document.querySelectorAll(".f-l");
    numberButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            userInput.textContent += button.textContent;
        });
    });

    // Add event listener to reset button
    resetButton.addEventListener("click", function() {
        userInput.textContent = "";
    });

    // Add event listener to equal button
    equalButton.addEventListener("click", function() {
        var expression = userInput.textContent;
        var result = evaluateExpression(expression);
        userInput.textContent = result;
    });
});

// Function to evaluate the expression
function evaluateExpression(expression) {
    try {
        // Split the expression into operands and operator
        var operands = expression.split(/[+\-*/%^]/);
        var operator = expression.match(/[+\-*/%^]/);

        // Convert operands to numbers
        var operand1 = parseFloat(operands[0]);
        var operand2 = parseFloat(operands[1]);

        // Perform the calculation based on the operator
        switch (operator[0]) {
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
                return "Error: Invalid operator";
        }
    } catch (error) {
        return "Error";
    }
}
