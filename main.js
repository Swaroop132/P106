function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/dsE3BL8d-U/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}
dog = 0;
snake = 0;
lion = 0;
monkey = 0;
function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        RandomRed = Math.floor(Math.random() * 255) + 1;
        RandomGreen = Math.floor(Math.random() * 255) + 1;
        RandomBlue = Math.floor(Math.random() * 255) + 1;

        document.getElementById("resultLabel").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("resultCount").innerHTML = 'Detected dog - ' + dog + ' Detected snake - ' + snake + ' Detected monkey - ' + monkey + ' Detected lion - ' + lion;
        document.getElementById("resultLabel").style.color = "rgb(" + RandomRed + ", " + RandomGreen + ", " + RandomBlue + ")";
        document.getElementById("resultCount").style.color = "rgb(" + RandomRed + ", " + RandomGreen + ", " + RandomBlue + ")";

        img = document.getElementById('animalImage');

        if (results[0].label == "Snake") {
            img.src = 'snake.png';
            snake = snake + 1;
        } else if (results[0].label == "Dog") {
            img.src = 'dog.png'
            dog = dog + 1;
        } else if (results[0].label == "Monkey") {
            img.src = 'Moonki.jpeg';
            monkey = monkey + 1;
        } else if (results[0].label == "Lion") {
            img.src = 'Lion.png';
            lion = lion + 1;
        } else {
            img.src = 'EarListen.gif';
        }
    }
}

