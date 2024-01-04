import Swiper from 'swiper';

import {
  Pagination,
  A11y,
  Keyboard,
  Autoplay,
  Parallax
} from 'swiper/modules';

Swiper.use([Pagination, A11y, Keyboard, Autoplay, Parallax]);

const bodyStyle = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyle.getPropertyValue('--family-swiper-gap'));
const progressCircle = document.querySelector(".js-autoplay-progress-icon");
const progressContent = document.querySelector(".js-autoplay-progress-content");

const bannerSwiper = new Swiper('.banner__swiper', {
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  loop: true,
  speed: 1500,
  parallax: true,
  pagination: {
    el: '.banner__swiper-pagination',
    type: 'bullets',
    dynamicBullets: true,
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  a11y: {
    enabled: true,
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
    firstSlideMessage: 'This is the first slide',
    lastSlideMessage: 'This is the last slide',
    paginationBulletMessage: 'Go to slide {{index}}',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});

const familySwiper = new Swiper('.family__swiper', {
  slidesPerView: 'auto',
  slideToClickedSlide: true,
  spaceBetween: gap,
  loop: true,
  speed: 1500,
  a11y: {
    enabled: true,
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
    firstSlideMessage: 'This is the first slide',
    lastSlideMessage: 'This is the last slide',
    paginationBulletMessage: 'Go to slide {{index}}',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true
  }
});
