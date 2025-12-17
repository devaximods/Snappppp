const startScreen = document.querySelector('.start-screen');
const content = document.querySelector('.content');

// Musique Teresita vibe (piano romantique royalty free proche de l'émotion)
const music = new Audio('https://cdn.pixabay.com/download/audio/2022/03/28/audio_0c3e0c5d5c.mp3?filename=piano-moment-9837.mp3');
music.loop = true;
music.volume = 0.5;

function startAnimation() {
    startScreen.style.display = 'none';
    content.style.display = 'block';
    music.play().catch(e => console.log("Son bloqué, mais c'est normal sur mobile sans interaction"));
}

// Écoute le premier touch ou clic
document.body.addEventListener('touchstart', startAnimation, { once: true });
document.body.addEventListener('click', startAnimation, { once: true });