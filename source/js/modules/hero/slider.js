import Swiper from '../../vendor/swiper';
import {isMobile} from '../../utils/is-mobile';

const addHeroSlider = () => {
  if (document.querySelector('.hero__slider')) {
    return new Swiper('.hero__slider', {
      allowTouchMove: isMobile(),
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      pagination: {
        el: '.hero__pagination',
        clickable: true,
        renderBullet: (index, className) => {
          return `<button class="hero__pagination-button ${className} type="button" aria-label="Перейти к ${index + 1} слайду"></button>`;
        },
      },
    });
  }
  return null;
};

export {addHeroSlider};
