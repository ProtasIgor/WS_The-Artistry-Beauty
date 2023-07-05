'use strict';

//section rules
(function EventSummaryPointer() {
    const arraySummary = document.querySelectorAll('.rule__list-item-title');

    for (const item of arraySummary) {

        item.addEventListener('click', () => {
            item.classList.toggle('rule__list-item-title--open');
        })
    }
}());

// section service and price for them
(function () {
    const ServiceLinkManikur = document.querySelector('.service__link--manikur');
    const ServiceLinkPedikur = document.querySelector('.service__link--pedikur');
    const ServiceLinkCilia = document.querySelector('.service__link--cilia');
    const ServiceLinkBrovi = document.querySelector('.service__link--brovi');

    const ContentBox = document.querySelector('.service__content-item');

    ContentBox.innerHTML = document.querySelector('.manikur').innerHTML;

    ServiceLinkManikur.addEventListener('click', () => {
        ContentBox.innerHTML = document.querySelector('.manikur').innerHTML;
    });
    ServiceLinkPedikur.addEventListener('click', () => {
        ContentBox.innerHTML = document.querySelector('.pedikur').innerHTML;
    });
    ServiceLinkCilia.addEventListener('click', () => {
        ContentBox.innerHTML = document.querySelector('.cilia').innerHTML;
    });
    ServiceLinkBrovi.addEventListener('click', () => {
        ContentBox.innerHTML = document.querySelector('.brovi').innerHTML;
    });
}());

// section header
(function () {
    const burgerButtonBegin = document.querySelector('.burger-menu__link');
    const burgerButtonCansel = document.querySelector('.menu__cansel-button');

    const menu = document.querySelector('.menu');

    burgerButtonBegin.addEventListener('click', () => {
        menu.classList.add('menu-active');
    })

    burgerButtonCansel.addEventListener('click', () => {
        menu.classList.remove('menu-active');
    })
}());

// page anchors
(function () {
    const navLinks = document.querySelectorAll('.header__nav-link');
    const menuLinks = document.querySelectorAll('.menu__link');

    const price = document.querySelector('.service');
    const rule = document.querySelector('.rule');
    const contact = document.querySelector('.contact');

    const info = { block: "start", behavior: "smooth" };

    navLinks[0].addEventListener('click', (e) => {
        price.scrollIntoView(info)
    })
    navLinks[1].addEventListener('click', (e) => {
        rule.scrollIntoView(info)
    })
    navLinks[2].addEventListener('click', (e) => {
        contact.scrollIntoView(info)
    })

    menuLinks[0].addEventListener('click', (e) => {
        price.scrollIntoView(info)
        document.querySelector('.menu').classList.remove('menu-active');
        
    })
    menuLinks[1].addEventListener('click', (e) => {
        rule.scrollIntoView(info)
        document.querySelector('.menu').classList.remove('menu-active');

    })
    menuLinks[2].addEventListener('click', (e) => {
        contact.scrollIntoView(info)
        document.querySelector('.menu').classList.remove('menu-active');

    })


}());

// button to fast scrolling
(function () {
    const link = document.querySelector('.header__slide-button');

    const item = document.querySelector('.header').nextElementSibling;

    link.addEventListener('click', () => {
        item.scrollIntoView({ block: 'start', behavior: 'smooth' })
    })
}())

// slider
$(function () {
    if (document.documentElement.clientWidth <= 1200) {
        document.querySelector('.working__list').classList.add('slider');

        $(".slider").slick(
            {
                arrows: false,
                dots: true,
                fade: true,
                autoplay: true,
                autoplaySpeed: 2000,
                lazyLoad: 'ondemand',
                pauseOnHover: true,
                draggable: true,
            }
        );
    }
});