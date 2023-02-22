import Typed from 'typed.js'

new Typed('.typing', {
  strings: ['Desenvolvedora web', 'Designer'],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
})

var swiper = new Swiper('.mySwiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})
