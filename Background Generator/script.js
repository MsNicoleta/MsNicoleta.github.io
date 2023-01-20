// var CSS = document.querySelector("h3"); //selecting h3 which will display the code for the colors
// var color1 = document.querySelector(".color1");//".color1" since you are selecting class="color1"
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient")//this will be the var so that the bg gradient will be selected
// var random = document.getElementById("random"); //this will be the var for the random button
// //console.log(body);
// //body.style.background = "salmon";
// function setGradient() {
//       body.style.background = "linear-gradient(to right, "
//         + color1.value
//         + ", "
//         + color2.value
//           + ")";
    
//     CSS.textContent = body.style.background + ";";

// }

// //Math Rando calculator
// function randomInteger(max) {
//     return Math.floor(Math.random()*(max + 1));
// }

// let randColBut = document.querySelector('#randColBut');

// //converts random numbers to rgb format
// function rgbFunc(r, g, b){
//   return "rgb("+r+","+g+","+b+")";
// }
// // Outputs a number between 0 and 255 inclusive 
// function genRandCol(){
//   let r = randomInteger(255);
//   let g = randomInteger(255);
//   let b = randomInteger(255);            
//   color1 = rgbFunc(r,g,b);
//   color2 = rgbFunc(r,g,b);
//   return {
//     color1,
//     color2
//     }
//  }
// //random button color click
// randColBut.addEventListener('click',function(){
//     body.style.background = `linear-gradient(to right, ${genRandCol().color1.toString()} , 
//     ${genRandCol().color1.toString()}`;
//     CSS.
//         CSS.textContent = body.style.background + ";";
// });

// color1.addEventListener("input", setGradient);
// color2.addEventListener("input", setGradient);
// random.addEventListener("click", randomGradient);

// below is another way to get the same result


var css = document.querySelector("h3"); //selecting h3 which will display the code for the colors
var color1 = document.querySelector(".color1"); //".color1" since you are selecting class="color1"
var color2 = document.querySelector(".color2"); //samedt
var body = document.getElementById("gradient"); //this will be the var so that the bg gradient will be selected
var random = document.getElementById("random"); //this will be the var for the random button

function setGradient(){
	body.style.background = 	//this changes the background for color1. remember ".style.background" = changes the property of css.
		"linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";
	css.textContent = body.style.background + ";"; //h3 will display the css code for the linear gradient as we select color1 and color2
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var randColor = '#';
  for (var i = 0; i < 6; i++) {
    randColor += letters[Math.floor(Math.random() * 16)];
  }
  return randColor;
}

function setRandomGradient(){
	body.style.background = 	
		"linear-gradient(to right, "
		+ getRandomColor()
		+ ", "
		+ getRandomColor()
		+ ")";
    css.textContent = body.style.background + ";"; 
    console.log( getRandomColo);
}


color1.addEventListener("input", setGradient); //input = for the value being selected, do the function
color2.addEventListener("input", setGradient); // and since this is addEventListener, we do callback by input/click/keypress etc.
random.addEventListener("click", setRandomGradient); // click then callback for the random button

//we can also add "oninput="setGradient()" on the <input> tag in html
//to call the function. e.g. <input oninput="setGradient()">
//sec11lec109 15:00

