import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

Swiper.use([Pagination]);


document.addEventListener('DOMContentLoaded', function () {
  let swiper;

  function initSwiper() {
    swiper = new Swiper('.swiper-container-1', {
      pagination: {
        el: '.swiper-pagination-1',
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

      const paginationContainer = document.querySelector('.swiper-pagination-1');
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
