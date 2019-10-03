var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(255, 255, 255)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)"
]


// for (var i = 0; i < 5; i++ ){
// 	var currentColor = "rgb("+ (Math.floor(Math.random() * (+255 - +0)) + +0) +", "+ (Math.floor(Math.random() * (+255 - +0)) + +0) +", "+ (Math.floor(Math.random() * (+255 - +0)) + +0) + ")";
// 	colors[i] = currentColor;
// }

// colorRandomiser();

var squares = document.querySelectorAll(".square");
var pickedColor = colors[Math.floor(Math.random() * (+5 - +0)) + +0];
var colorDisplay = document.getElementById('colorDisplay');
var gameInformation = document.getElementById('gameInfo');
var  restartButton = document.getElementById("restartButton");
var heading = document.getElementById('heading');

colorDisplay.textContent = pickedColor;
restartButton.addEventListener("click", function() {
	restart();
});

// colors = colorRandomiser();
restart();


for(var i = 0; i < squares.length; i++){
	//add initial colors to the squares
	// squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.backgroundColor;
		if (clickedColor == pickedColor) {
			gameInformation.textContent = "Winner!";
			changeColor();
		} 
		else {
			
			this.style.backgroundColor = "#232323"
			gameInformation.textContent = "try again";
		}

	});
}

function changeColor() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = pickedColor;
	}
	heading.style.backgroundColor = pickedColor;

}

function colorRandomiser(){
	for (var i = 0; i < 5; i++ ){
		var currentColor = "rgb("+ (Math.floor(Math.random() * 255)) +", "+ (Math.floor(Math.random() * 255)) +", "+ (Math.floor(Math.random() * 255)) + ")";
		colors[i] = currentColor;
	}
	for(var i = 0; i < squares.length; i++){
		//add initial colors to the squares
		squares[i].style.backgroundColor = colors[i];
	}
	return colors;
}

function restart(){
	colorRandomiser();
	pickedColor = colors[Math.floor(Math.random() * (+5 - +0)) + +0];
	colorDisplay.textContent = pickedColor;
	gameInformation.textContent = "please select the matching color";
	heading.style.color = "white";
}
	
