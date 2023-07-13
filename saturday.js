const toggleBtn = document.querySelector('monday_toogleBtn')
const menu = document.querySelector('monday_menu')
const icons = document.querySelector('monday_icons')

toggleBtn.addEventListener('click', () => {
menu.classList.toggle('active');
icons.classList.toggle('active');
});