// Génère 60 étoiles aléatoires twinkling
for (let i = 0; i < 60; i++) {
    let star = document.createElement('div');
    star.classList.add('star');
    star.style.width = Math.random() * 4 + 2 + 'px';
    star.style.height = star.style.width;
    star.style.top = Math.random() * 100 + '%';
    star.style.left = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 5 + 's';
    document.body.appendChild(star);
}