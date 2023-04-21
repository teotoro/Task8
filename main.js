document.addEventListener('DOMContentLoaded', () => {
    let hamburgerMenu = document.getElementById('hamburger-menu');
    let openDropDownMenu = document.getElementById('open');
    let closeDropDownMenu = document.getElementById('close');
    let dropDown = document.getElementById('menu')

    hamburgerMenu.addEventListener('click', function () {
        openDropDownMenu.classList.toggle('active-icon');
        closeDropDownMenu.classList.toggle('active-icon');
        dropDown.classList.toggle('drop-down')
    });
})