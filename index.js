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
        temp = (tempBox.value * 9/5) + 32;
        temp = temp.toFixed(2); 
        console.log(temp);
    }
    else if(celsiusRadio.checked){
        temp = (tempBox.value - 32) * 5/9;
        temp = temp.toFixed(2); 
        console.log(temp);
    }
    else{
        console.log("Nothing is checked");
    }
}
