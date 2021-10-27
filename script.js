
let oldtime = 0;
let time = 0;
let pos_x = 100;
let pos_y = 100;
let count = 0;
const WIDTH = 800;
const HEIGHT = 600;
document.getElementById('square').style.opacity = 0;

function startButton() {
    document.getElementById('start_button').textContent = '';
    document.getElementById('start_button').style.background = 'black'
    document.getElementById('square').style.opacity = 1;
    oldtime = (new Date()).getTime() / 1000;
}

function start_game() {
    document.getElementById('start_button').addEventListener('click', startButton);
}

function moveSquare() {
    let x = Math.floor(Math.random() * (WIDTH - 50));
    let y = Math.floor(Math.random() * (HEIGHT - 50));
    document.getElementById('square').style.left = x.toString() + "px";
    document.getElementById('square').style.top = y.toString() + "px";
}

function stopGame() {
    document.getElementById('start_button').removeAttribute
    document.getElementById('square').style.opacity = 0;
    document.getElementById('square').removeEventListener('click', function () { });
    document.getElementById('start_button').style.background = '#070707'
    document.getElementById('start_button').textContent = 'Game over. Your time was: ' + (time - oldtime).toFixed(2).toString() + " seconds. " + "Click to play again";
}

function play_game() {
    start_game();

    document.getElementById('square').addEventListener('click', function () {

        moveSquare();

        count++;
        if (count == 5) {

            time = (new Date()).getTime() / 1000;
            console.log((time - oldtime).toFixed(2).toString() + " seconds. " + "Click to play again")

            stopGame();
            count = 0;

        }
    })
}

play_game();