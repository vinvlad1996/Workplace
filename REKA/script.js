window.onscroll = function showHeader() {

    var logo = document.querySelector('.logo');
    var header = document.querySelector('.header');
    var items = document.querySelectorAll('.header-nav-it');
    var phone = document.querySelector('.header-nav-ite');

    if(window.pageYOffset >= 170) {
        logo.classList.add('logo-change');
        header.classList.add('header-fixed');

        for (var i = items.length - 1; i >= 0; i--) {
            items[i].classList.add('header-nav-item-change')
        }

        phone.classList.add('phone-change');
    }
    else {
        logo.classList.remove('logo-change'); 
        header.classList.remove('header-fixed');

        for (var i = items.length - 1; i >= 0; i--) {
            items[i].classList.remove('header-nav-item-change')
        } 
      
        phone.classList.remove('phone-change');    
    }
}


