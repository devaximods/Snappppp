const startScreen = document.querySelector('.start-screen');
const content = document.querySelector('.content');

// Musique romantique piano intense (le plus proche de Teresita vibe royalty free que j’ai trouvé – doux, passionné, émouvant)
const music = new Audio('https://cdn.pixabay.com/download/audio/2023/01/23/audio_8a1f0b0e8d.mp3?filename=romantic-piano-1070.mp3');
music.loop = true;
music.volume = 0.6;

function startEverything() {
    startScreen.style.display = 'none';
    content.style.display = 'block';
    music.play();
}

// Démarre au premier touch ou clic (obligatoire sur mobile)
document.body.addEventListener('touchstart', startEverything, { once: true });
document.body.addEventListener('click', startEverything, { once: true });