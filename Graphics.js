var population;
var mouse;
var bins;


function drawEverything (){
	colorRect(0, 0, canvas.width, canvas.height, 'black');

	mouse.holdIsItem(population.arr);

	for (var i = 0; i < bins.arr.length; i++) {
		bins.arr[i].show('blue');
	}
	for (var i = 0; i < population.arr.length; i++) {
		population.arr[i].show('blue');
		population.arr[i].isInBin();
	}

	population.allPutAway();
	
}

function drawText(color, words, X, Y){
    canvasContext.fillStyle = color;
    canvasContext.fillText(words, X, Y);
}

function colorCircle(centerX, centerY, radius, drawColor){
	canvasContext.fillStyle = drawColor;
	canvasContext.beginPath();
	canvasContext.arc(centerX, centerY, radius, 0,Math.PI*2, true);
	canvasContext.fill();	
}

function colorRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
}



