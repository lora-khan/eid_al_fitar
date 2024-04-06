const musicButton = document.getElementById('musicButton');
const backgroundMusic = document.getElementById('backgroundMusic');
const fireworks = document.getElementById('fireworks');
const moonStar = document.getElementById('dance');


function toggleDanceVisibility(isPlaying) {
    if (isPlaying) {
        moonStar.style.display = 'inline';
    } else {
        moonStar.style.display = 'none';
    }
}


function toggleFireworksVisibility(isPlaying) {
    if (isPlaying) {
        fireworks.style.display = 'block';
    } else {
        fireworks.style.display = 'none';
    }
}

moonStar.style.animation = 'dance 3s ease-in-out infinite';

musicButton.addEventListener('click', () => {
    const icon = musicButton.querySelector('i');
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        toggleDanceVisibility(true);
        toggleFireworksVisibility(true);
        musicButton.classList.add('playing');
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    } else {
        backgroundMusic.pause();
        toggleDanceVisibility(false);
        toggleFireworksVisibility(false);
        musicButton.classList.remove('playing');
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    }
});