// Convert Fahrenheit to Celsius
function fahrenheitToCelsius(f) {
    return (f - 32) * 5 / 9;
}

// Convert Celsius to Fahrenheit
function celsiusToFahrenheit(c) {
    return (c * 9 / 5) + 32;
}

// Display the result
function updatePage(type) {

    let temp = Number(document.getElementById("temp").value);
    let answer;

    if (type === "C") {
        answer = fahrenheitToCelsius(temp);
        document.getElementById("result").innerHTML =
            temp + "°F = " + answer.toFixed(2) + "°C";
    } else {
        answer = celsiusToFahrenheit(temp);
        document.getElementById("result").innerHTML =
            temp + "°C = " + answer.toFixed(2) + "°F";
    }
}