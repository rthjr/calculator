document.addEventListener("DOMContentLoaded", function(){
    var resetButton = document.getElementById("reset");
    var UserInput = document.getElementById("binary-in");


    resetButton.addEventListener("click", function(){
        UserInput.value = "";
    });

    UserInput.addEventListener("keyup", function (event) {
        // Check if Enter key is pressed
        if (event.key === 'Enter') {
            // Get the decimal value entered by the user
            var decimalValue = parseInt(UserInput.value.trim());

            decimalValue = decimalValue + 273;

            UserInput.value = decimalValue;
        }
    });
});