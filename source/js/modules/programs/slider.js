import Swiper from '../../vendor/swiper';
import {isMobile} from '../../utils/is-mobile';

const addProgramsSlider = () => {
  if (document.querySelector('.programs__slider')) {
    return new Swiper('.programs__slider', {
      allowTouchMove: isMobile(),
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
      },
      scrollbar: {
        el: '.programs__scrollbar',
      },
      navigation: {
        nextEl: '.programs__next',
        prevEl: '.programs__prev',
      },
    });
  }
  return null;
};

export {addProgramsSlider};
