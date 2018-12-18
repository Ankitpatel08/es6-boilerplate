import './scss/hp-background.scss';
import slick from 'slick-carousel';

import HPBackgroundTpl from './tpl/hp-background.hbs';

/**
 * APP: Homepage
 * renders background animation with content slide.
 * converted into slider in mobile breakpoint.
 * @export
 * @class HPBackground
 */
export default class HPBackground {
  /**
   *
   * @param {*} options contains data to render HPBackground
   */
  constructor(options) {
    const template = HPBackgroundTpl(options);

    this.HPBackground = document.getElementById('HPBackground');

    this.HPBackground.innerHTML = template;

    // super();
    this._init();
  }

  /**
   * Initialize slick carousel
   * TODO: confirmation for animation in mobile break-point
   *
   * @memberof HPBackground
   */
  _init() {
    $('.hp-slider').slick({
      dots: true,
      speed: 2500,
      slidesToShow: 1,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: false,
      paushOnFocus: false,
      removeBefore: false,
      infinite: true,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            fade: false,
            slidesToShow: 1,
            speed: 0,
            dots: true,
            infinite: true,
            autoplay: false,
          },
        },
      ],
    });
  }
}
