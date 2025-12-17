const startScreen = document.querySelector('.start-screen');
const message = document.querySelector('.message');
const doodle = document.querySelector('css-doodle');

const music = new Audio('https://cdn.pixabay.com/download/audio/2022/03/28/audio_0c3e0c5d5c.mp3?filename=piano-moment-9837.mp3');
music.loop = true;
music.volume = 0.5;

document.body.addEventListener('touchstart', startLove, { once: true });
document.body.addEventListener('click', startLove, { once: true });

function startLove() {
    startScreen.style.display = 'none';
    message.style.display = 'block';
    doodle.style.display = 'block';
    music.play();
}