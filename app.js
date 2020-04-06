var inputCelsiusElt = document.querySelector("#celsius > input")
var inputFahrenheitElt = document.querySelector("#fahrenheit > input")
var inputKelvinElt = document.querySelector("#kelvin > input")

function round(num){
	return Math.round(num*100)/100;
}

function celsiusTo(){
	var cTemp = parseFloat(inputCelsiusElt.value);
	var fTemp = cTemp * 9/5 + 32;
	var kTemp = cTemp + 273.15;
	inputFahrenheitElt.value = round(fTemp);
	inputKelvinElt.value = round(kTemp);
}

function fahrenheitTo(){
	var fTemp = parseFloat(inputFahrenheitElt.value);
	var cTemp = (fTemp - 32) * 5/9;
	var kTemp = (fTemp + 459.67) * 5/9;
	inputCelsiusElt.value = round(cTemp);
	inputKelvinElt.value = round(kTemp);
}

function kelvinTo(){
	var kTemp = parseFloat(inputKelvinElt.value);
	var cTemp = kTemp - 273.15;
	var fTemp = 9/5 * (kTemp - 273) + 32;
	inputCelsiusElt.value = round(cTemp);
	inputFahrenheitElt.value = round(fTemp);
}


inputCelsiusElt.addEventListener("input", celsiusTo);
inputFahrenheitElt.addEventListener("input", fahrenheitTo);
inputKelvinElt.addEventListener("input", kelvinTo);