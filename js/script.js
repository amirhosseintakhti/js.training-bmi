
// const weight = document.getElementById("myWeight");
// let show = document.getElementById("w1")
// 
// weight.addEventListener('range', () => {
    // console.log(weight.value);
// })
const slider1 = document.getElementById("myWeight");
const slider2 = document.getElementById("myHeight");
let w1 = document.getElementById("w1");
let h1 = document.getElementById("h1");

let bmi,error,measure;
let weight = 70;
let height = 180;

function upDateSlider1() {
    console.log(slider1.value);
    weight = slider1.value;
    w1.innerHTML = slider1.value;

}

function upDateSlider2() {
    console.log(slider2.value);
    height = slider2.value;
    h1.innerHTML = slider2.value; 
}

function calculate(){
    height /= 100;
    height *= height;
    bmi = weight / height;
    bmi = bmi.toFixed(1);

    if (bmi < 18.5){
        measure = "your BMI is" + bmi + " which means " + "you are Underweight";
    } else if (bmi < 25) {
        measure = "your BMI is" + bmi + " which means " + "you are Normal"
    } else if (bmi < 30) {
		measure = "Your BMI is " + bmi + " which means " + "You are Overweight";
	} else if (bmi >= 30) {
		measure = "Your BMI is " + bmi + " which means " + "You are Obese";
	}

    if (weight === 0 ) {
		document.getElementById("results").innerHTML = error;
	} else if (height === 0){
		document.getElementById("results").innerHTML = error;
	}
	 else {
		document.getElementById("results").innerHTML = measure;
	}
	if (weight < 0) {
		document.getElementById("results").innerHTML = "Negative Values not Allowed";
	}
}
