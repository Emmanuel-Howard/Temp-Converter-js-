// Define constants, on click convert based on radio selection

// Define constants & variables
const tempBox = document.getElementById("tempBox");
const fahrenheitRadio = document.getElementById("FahrenheitRadio");
const celsiusRadio = document.getElementById("CelsiusRadio");
const convertBtn = document.getElementById("convertBtn");
let temp = document.getElementById("temp");
let finalDegree = document.getElementById("finalDegree");

// On click function
convertBtn.onclick = function convert(){
    if(fahrenheitRadio.checked){
        temperature = (tempBox.value * 9/5) + 32;
        temperature = temperature.toFixed(0); 
        console.log(temperature);

        temp.textContent = temperature;
        finalDegree.textContent = "°F"
    }
    else if(celsiusRadio.checked){
        temperature = (tempBox.value - 32) * 5/9;
        temperature = temperature.toFixed(0); 
        console.log(temperature);

        temp.textContent = temperature;
        finalDegree.textContent = "°C"
    }
    else{
        console.log("Nothing is checked");
    }
}
