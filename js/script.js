
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

let bmi;
let weight = 80;
let height = 170;

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

}