// 1. Define the core conversion function
function convertKmToMiles(kilometers) {
    // Formula: miles = kilometers * 0.621371
    const conversionFactor = 0.621371;
    const miles = kilometers * conversionFactor;
    return miles;
}

// 2. Get the necessary elements from HTML (DOM Manipulation)
const inputField = document.getElementById('kilometersInput');
const convertButton = document.getElementById('convertButton');
const clearButton = document.getElementById('clearButton');
const resultDisplay = document.getElementById('resultDisplay');

// 3. Define the function to run when the convert button is clicked
function handleConversion() {
    // Get the value from the input field as a floating-point number
    const kilometers = parseFloat(inputField.value);

    // --- Input Validation and Error Handling ---
    // Check if the value is NOT a number (isNaN) or is less than zero, or is empty
    if (isNaN(kilometers) || kilometers < 0 || inputField.value.trim() === '') {
        // Display a clear error message
        resultDisplay.textContent = "❌ Error: Please enter a valid positive number.";
        resultDisplay.style.color = 'red'; 
        return; // Stop the function from proceeding further
    }

    // If the input is valid:
    // A. Perform the calculation
    const milesResult = convertKmToMiles(kilometers);

    // B. Display the result (Update the <p> element content)
    // .toFixed(2) formats the result to two decimal places
    resultDisplay.textContent = `${kilometers} kilometers is equal to ${milesResult.toFixed(2)} miles.`;
    resultDisplay.style.color = '#333'; // Reset color
}

// 4. Define the function for the clear button
function handleClear() {
    // Clear the input field
    inputField.value = ''; 
    // Reset the result display text
    resultDisplay.textContent = "The result will appear here...";
    resultDisplay.style.color = '#333'; 
}

// 5. Attach the functions to the button click events (Event Handling)
convertButton.addEventListener('click', handleConversion);
clearButton.addEventListener('click', handleClear);