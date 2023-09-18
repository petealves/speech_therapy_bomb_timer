const bombImage = document.getElementById('bomb');
const clickBombButton = document.getElementById('click_bomb');
const ticktackSound = document.getElementById('ticktack');
const explosionSound = document.getElementById('explosion');
let countdownInterval;
let explosionTime;

let isTicking = false;

function resetBomb() {
    clearInterval(countdownInterval);
    isTicking = false;
    clickBombButton.style.visibility = "visible"
    bombImage.src = 'bomb.png';
    ticktackSound.pause();
    ticktackSound.currentTime = 0;
}

function startCountdown() {
    resetBomb();
    isTicking = true;
    clickBombButton.style.visibility = "hidden"

    explosionTime = Math.floor(Math.random() * (60 - 15 + 1)) + 15;
    console.log("Time for explosion: "+ explosionTime + " seconds")
    bombImage.src = 'bomb.png';
    
    ticktackSound.play();
    countdownInterval = setInterval(() => {
        if (explosionTime <= 0) {
            clearInterval(countdownInterval);
            bombImage.src = 'bomb_exploded.png';
            ticktackSound.pause();
            explosionSound.play();

            clickBombButton.style.visibility = "visible"
        } else {
            explosionTime--;
        }
    }, 1000);
}

if(!isTicking) {
    clickBombButton.addEventListener('click', startCountdown);
}


