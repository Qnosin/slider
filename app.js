const burgerButton = document.querySelector('.hamburger');
const exitButton = document.querySelector('.close-btn');

burgerButton.addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('sidebarOn')
})

exitButton.addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('sidebarOn')
})