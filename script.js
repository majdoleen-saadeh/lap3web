function handleConversion() {
    var inputElement = document.getElementById('kilometersInput');
    var resultElement = document.getElementById('resultDisplay');
    
    var kilometers = parseFloat(inputElement.value);
    
    if (isNaN(kilometers) || kilometers < 0 || inputElement.value.trim() === '') {
        resultElement.innerHTML = "Error";
        resultElement.style.color = 'red';
        return; 
    }
    
    var conversionFactor = 0.621371;
    var milesResult = kilometers * conversionFactor;
    
    var roundedMiles = Math.round(milesResult * 100) / 100;
    
    resultElement.innerHTML = kilometers + " km  " + " equal " + roundedMiles + " miles"   ;
    resultElement.style.color = '#3e0808';
}


function handleClear() {
    var inputElement = document.getElementById('kilometersInput');
    var resultElement = document.getElementById('resultDisplay');
    
    inputElement.value = "";
    
    resultElement.innerHTML = "The Result";
    resultElement.style.color = '#3e0808';
}