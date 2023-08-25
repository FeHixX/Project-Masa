import Swiper from '../../vendor/swiper';
import {isMobile} from '../../utils/is-mobile';

const addReviewsSlider = () => {
  if (document.querySelector('.reviews__slider')) {
    return new Swiper('.reviews__slider', {
      allowTouchMove: isMobile(),
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 'auto',
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
      },
      scrollbar: {
        el: '.reviews__scrollbar',
      },
      navigation: {
        nextEl: '.reviews__next',
        prevEl: '.reviews__prev',
      },
    });
  }
  return null;
};

export {addReviewsSlider};
