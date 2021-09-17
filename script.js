
// MENU

let openMenu = document.querySelector('.menu-btn');
let closeMenu = document.querySelector('.menu-close');
let menu = document.querySelector('.header');

openMenu.addEventListener('click', showMenu);
closeMenu.addEventListener('click', hiddenMenu);


function showMenu(){   
        menu.style['right'] = "0";
        menu.style['transition'] = ".3s";
}

function hiddenMenu(){  
    menu.style['right'] = "-400px";
}


window.onresize = function() {

    if(screen.width >= 1100 ){
        menu.style['right'] = "0";
    }else{
        menu.style['right'] = "-400px";
    }
  
};













