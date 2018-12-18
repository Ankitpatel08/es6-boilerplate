import './scss/carousel.scss';
import slick from 'slick-carousel';
import util from '../../common/js/custom.js';

import carouselTpl from './tpl/carousel.hbs';

/**
 * @export
 * @class Carousel
 */
export default class Carousel {
  /**
   *
   * @param {*} options contains data to render Carousel
   */
  constructor(options) {
    $('#Carousel').append(carouselTpl(options));
    this._init();
  }

  /**
   * Initialize slick carousel
   *
   * @memberof Carousel
   */
  _init() {
    $('.hp-slider').slick({
      dots: false,
      //speed: 2500,
      slidesToShow: 1,
      //fade: true,
      cssEase: 'linear',
      //autoplay: true,
      //autoplaySpeed: 3000,
      //pauseOnHover: false,
      //paushOnFocus: false,
      removeBefore: false,
      //infinite: true,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            fade: false,
            slidesToShow: 1,
            speed: 0,
            dots: true,
            infinite: false,
            autoplay: false,
          },
        },
      ],
    });
  }
}
