import Swiper from '../../vendor/swiper';
import {isMobile} from '../../utils/is-mobile';

const addNewsSlider = () => {
  if (document.querySelector('.news__slider')) {
    return new Swiper('.news__slider', {
      allowTouchMove: isMobile(),
      updateOnWindowResize: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
          grid: {
            rows: 2,
            fill: 'row',
          },
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
          grid: {
            rows: 2,
            fill: 'row',
          },
        },
        1200: {
          slidesPerView: 'auto',
          spaceBetween: 32,
          grid: {
            rows: 1,
          },
        },
      },
      navigation: {
        nextEl: '.news__next',
        prevEl: '.news__prev',
      },
      pagination: {
        el: '.news__pagination',
        clickable: true,
        renderBullet: (index, className) => {
          return `<button class="news__pagination-button ${className} type="button" aria-label="Перейти к ${index + 1} слайду">${index + 1}</button>`;
        },
      },
    });
  }
  return null;
};

export {addNewsSlider};
