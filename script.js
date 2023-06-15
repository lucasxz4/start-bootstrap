let btn_menu = document.querySelector('#bx-menu')
btn_menu.addEventListener('click', function () {
    let menu = document.querySelector('#menu')
    if (menu.style.display == 'block') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }
})