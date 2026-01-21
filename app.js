function menuOnOff() {
    var menuList = document.getElementById('menu-list');
    var menuLink1 = document.getElementById('menu-link1');
    var menuLink2 = document.getElementById('menu-link2');

    if (menuList.style.width === '3em') {
        menuList.style.width = '15em';
        menuList.style.height = '25em';
        menuLink1.style.display = 'flex';
        menuLink2.style.display = 'flex';
        menuLink1.style.border = 'solid 2px brown'
    } else {
        menuList.style.width = '3em';
        menuList.style.height = '3em';
        menuLink1.style.display = 'none';
        menuLink2.style.display = 'none';
    }
}