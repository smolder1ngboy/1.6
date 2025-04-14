import Swiper from 'swiper';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', function () {
  let swiper;

  function initSwiper() {
    swiper = new Swiper('.swiper-container-3', {
      pagination: {
        el: '.swiper-pagination-3',
        clickable: true,
      },
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      slidesOffsetBefore: 0,
      spaceBetween: 16,
    });
  }

  function destroySwiper() {
    if (swiper) {
      swiper.destroy(true, true);
      swiper = null;

      const paginationContainer = document.querySelector('.swiper-pagination-3');
      if (paginationContainer) {
        paginationContainer.innerHTML = '';
      }
    }
  }

  function checkSwiper() {
    if (window.matchMedia('(max-width: 768px)').matches) {
      if (!swiper) {
        initSwiper();
      }
    } else {
      destroySwiper();
    }
  }

  checkSwiper();
  window.addEventListener('resize', checkSwiper);
});