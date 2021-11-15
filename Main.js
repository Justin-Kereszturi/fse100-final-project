var canvas;
var canvasContext;

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	start();

	var framesPerSecond = 90;
	setInterval(update,1000/framesPerSecond);
}
function update(){
	drawEverything();
}


function start(){
	mouse = new Mouse();

	let objects = new Array(5);
	for (var i = 0; i < objects.length; i++) {
		let x = i*(canvas.width/objects.length) + 5;
		let y = 5;
		let w = (canvas.width/objects.length) - 5
		let h = 100;
			objects[i] = new object(x,y, w,h, i);
	}

	bins = new group(objects)

	objects = new Array(5);
	for (var i = 0; i < objects.length; i++) {
		let x = canvas.width * Math.random() - 30;
		let y = bins.arr[0].h + 10 + (canvas.height - bins.arr[0].h - 40) * Math.random();
		let w = 30 + Math.random() * 10;
		let h = 30 + Math.random() * 10;
			objects[i] = new object(x,y, w,h, i);
			objects[i].bin = bins.arr[i];
	}

	population = new group(objects);

}

