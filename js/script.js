let openButton = document.querySelectorAll('.menu-button')
let closeButton = document.querySelectorAll('.close-menu')
let background = document.getElementById('.background')

openButton.forEach(button => {
    button.addEventListener('click', () => {
        let menus = document.querySelector(button.dataset.menu);
        openDetail(menus);
    });
});

function openDetail(menus){
    if (menus == null) return
    menus.classList.add('active')
    background.classList.add('active')
}

closeButton.forEach(button => {
    button.addEventListener('click', () => {
        let menus = button.closest('.menu');
        closeDetail(menus);
    });
});

function closeDetail(menus){
    if (menus == null) return
    menus.classList.remove('active')
    background.classList.remove('active')
}

background.addEventListener('click', () => {
    let menus = document.querySelectorAll('.menu.active')
    menus.forEach(menu => {
        closeDetail(menu)
    })
})