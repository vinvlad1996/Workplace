window.onscroll = function showHeader() {

  var logo = document.querySelector('.logo');
  var header = document.querySelector('.header');
  var items = document.querySelectorAll('.header-nav-it');
  var phone = document.querySelector('.header-nav-ite');

  if (window.pageYOffset >= 170) {
    logo.classList.add('logo-change');
    header.classList.add('header-fixed');

    for (var i = items.length - 1; i >= 0; i--) {
      items[i].classList.add('header-nav-item-change')
    }

    phone.classList.add('phone-change');
  } else {
    logo.classList.remove('logo-change');
    header.classList.remove('header-fixed');

    for (var i = items.length - 1; i >= 0; i--) {
      items[i].classList.remove('header-nav-item-change')
    }

    phone.classList.remove('phone-change');
  }
}

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(data => data.text())
  .then(response => {
    const result = JSON.parse(response);
    const mainSlider = document.getElementById('main-slider');

    const slides = result.map(el => {
      return `
        <div class="swiper-slide">
          <img src="IMG/111.jpeg">
          <a href="index_2.html?id=${el.id}" target="_blank">
            <div id="title">${el.title}</div>
            <script>alert('xss')</script>
          </a>
          <div id="body">${el.body}</div>
        </div>
        `;
    }).join('');


    mainSlider.innerHTML = slides;

    // document.querySelector('#title').innerHTML = result[0].title;
    // document.querySelector('#body').innerHTML = result[0].body;
    // document.querySelector('#title1').innerHTML = result[1].title;
    // document.querySelector('#body1').innerHTML = result[1].body;
    // document.querySelector('#title2').innerHTML = result[2].title;
    // document.querySelector('#body2').innerHTML = result[2].body;
    return Promise
  })
  .then(data => {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        slidesPerView: 1.5,
        centeredSlides: true,
        spaceBetween: 115,
        grabCursor: true,
        // autoplay:true,
        interval: 10000,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },

        // breakpoints: {
        //     992: {
        //         slidesPerView: 1,
        //     }
        // },
    });
  })

