import Swiper, {
  Pagination
} from 'swiper';

Swiper.use([Pagination]);

const bannerSwiper = new Swiper('.banner-swiper', {
  slidesPerView: 'auto',
});
