document.addEventListener("DOMContentLoaded", function () {
    var resetButton = document.getElementById("reset");
    var userInput = document.getElementById("binary-in");

    resetButton.addEventListener("click", function () {
        userInput.value = "";
    });

    userInput.addEventListener("keyup", function (event) {
        // Check if Enter key is pressed
        if (event.key === 'Enter') {
            // Get the decimal value entered by the user    
            var word = userInput.value;
            var asciiValues = convertToASCII(word);
            // Join the ASCII values into a string and set it back to the input field
            userInput.value = asciiValues.join(' ');
        }
    });
});

function convertToASCII(text) {
    var asciiValues = [];
    for (var i = 0; i < text.length; i++) {
        var char = text.charAt(i);
        var asciiValue = char.charCodeAt(0);
        asciiValues.push(asciiValue);
    }
    return asciiValues;
}
