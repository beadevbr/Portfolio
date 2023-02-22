import $ from 'jquery'

$(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.navbar').addClass('sticky')
    } else {
      $('.navbar').removeClass('sticky')
    }
    if (this.scrollY > 400) {
      $('.whatsapp').addClass('show')
      $('.whatsapp1').addClass('show')
      $('.scroll-up-btn').addClass('show')
    } else {
      $('.whatsapp').removeClass('show')
      $('.whatsapp1').removeClass('show')
      $('.scroll-up-btn').removeClass('show')
    }
  })
  $('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 })
  })

  const title = document.querySelector('.whatsapp')

  title.addEventListener('mouseover', function () {
    const whatsapp = document.querySelector('#legenda')

    whatsapp.classList.add('hide')
  })
  title.addEventListener('mouseout', function () {
    const whatsapp = document.querySelector('#legenda')

    whatsapp.classList.remove('hide')
  })

  const color = document.querySelector('.icon-color')

  color.addEventListener('mouseover', function () {
    const iconColor = document.querySelector('#iconColor')

    iconColor.classList.add('hide1')
  })
  color.addEventListener('mouseout', function () {
    const iconColor = document.querySelector('#iconColor')

    iconColor.classList.remove('hide1')
  })

  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass('active')
    $('.menu-btn i').toggleClass('active')
  })
  $('.menu-bar').click(function () {
    $('.navbar .menu').toggleClass('active')
    $('.menu-bar i').toggleClass('active')
  })
})
