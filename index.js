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
        console.log("F checked")
    }
    else if(celsiusRadio.checked){
        console.log("C checked")
    }
    else{
        console.log("Nothing is checked")
    }
}
