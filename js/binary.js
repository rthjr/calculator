document.addEventListener("DOMContentLoaded", function () {
    // Get the binary input element
    var binaryInput = document.getElementById("binary-in");
    var resetButton = document.getElementById("reset");

    binaryInput.addEventListener("keyup", function (event) {
        // Check if Enter key is pressed
        if (event.key === 'Enter') {
            // Get the decimal value entered by the user
            var decimalValue = parseInt(binaryInput.value.trim());

            // Convert decimal to binary
            var binaryValue = decimalToBinary(decimalValue);

            // Display the binary value in the input field
            binaryInput.value = binaryValue;
        }
    });

    resetButton.addEventListener("click", function(){
        binaryInput.value = "";
    });
});

// Function to convert decimal to binary
function decimalToBinary(decimal) {
    return decimal.toString(2);
}