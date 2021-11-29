let firstFrame = undefined;
let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
const totalTime = 10*1000;
let allCorrectWordsWritten = 0;
let wordInput = document.getElementById('type_box');
const sentences = ['Hello, how are you?',
    'Keep on typing!',
    'What is your favorite subject in school?',
    'What is your name?',
    'I hope you are having a great day!']

window.onload = function () {
    displaySentence();

    //start of program
    var framesPerSecond = 10;
    setInterval(function () { update(); }, 1000 / framesPerSecond);
}

function displaySentence() {
    $('#words_display').empty();
    for (let i = 0; i < sentence.length; i++) {
        $('#words_display').append(
            $('<div>').prop({
                id: 'word' + i,
                class: 'word',
                innerHTML: sentence[i]
            })
        )
    }
}

function update() {
    if (startTime && currentWordIndex < sentence.length) {

        currentTime = new Date().getTime();

        elapsedTime = currentTime - startTime;

        drawTimeLeft();
        drawWordsPerMinute();
    }
}

function drawTimeLeft() {
    const timeLeft = Math.max(totalTime - elapsedTime, 0);
    document.getElementById("time").innerHTML = (timeLeft/1000).toFixed(1);
}

function drawWordsPerMinute() {
    if(elapsedTime <= totalTime) {
        const elapsedTimeInMin = elapsedTime / 1000 / 60;
        const wordsPerMin = allCorrectWordsWritten / elapsedTimeInMin;
        document.getElementById("wpm").innerHTML = "Words Per Minute: " + wordsPerMin.toFixed(2);
    }
}

let currentWordIndex = 0;
let sentence = pickSentence(sentences);

wordInput.onkeyup = function (e) {
    
    if (!startTime) {
        startTime = new Date().getTime();
    }

    if (e.keyCode == 32) {
        const wordsInInput = wordInput.value.trim().split(' ');
        const firstWord = wordsInInput[0];
        const word = document.getElementById('word' + currentWordIndex);

        const doesWordMatch = (firstWord == sentence[currentWordIndex]);
        word.style.color = doesWordMatch ? 'green' : 'red';
        if (doesWordMatch) {
            allCorrectWordsWritten++;
        }
        wordInput.value = wordsInInput.slice(1).join(' ');
        currentWordIndex++;


        if (currentWordIndex == sentence.length) {
            sentence = pickSentence(sentences);

            displaySentence();
            currentWordIndex = 0;
        }
    }
}

function pickSentence(sentences) {
    return sentences[Math.floor(Math.random() * sentences.length)].split(' ');
}

