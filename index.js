const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');

yesBtn.addEventListener('click', function () {
    popup.style.display = 'flex'; // Mostrar el pop-up
    noBtn.style.display = 'none'; // Ocultar el botón "No"
});

closeBtn.addEventListener('click', function () {
    popup.style.display = 'none'; // Ocultar el pop-up
    noBtn.style.display = 'inline-block'; // Volver a mostrar el botón "No"
});

function moveNoBtn() {
    const viewportWidth = window.innerWidth - noBtn.clientWidth;
    const viewportHeight = window.innerHeight - noBtn.clientHeight;

    const randomX = Math.random() * viewportWidth;
    const randomY = Math.random() * viewportHeight;

    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

noBtn.addEventListener('mouseover', moveNoBtn);
noBtn.addEventListener('touchstart', moveNoBtn); // Para móviles
