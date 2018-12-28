import { lory } from 'lory.js';

import './scss/gallery-slider.scss';
import gallerySliderTpl from './tpl/gallery-slider.hbs';

/**

 * @export
 * @class GallerySlider
 */
export default class GallerySlider {
  /**
   * @param {*} options contains data to render component.
   */
  constructor(options) {
    console.log('options', options);

    this.gallerySlider = document.getElementById('GallerySlider');

    options.forEach((element, index) => {
      let template = gallerySliderTpl(element);

      this.gallerySlider.insertAdjacentHTML('beforeend', template);

      if (index == options.length - 1) {
        window.setTimeout(() => {
          this.initSliders(document.querySelectorAll('.js_slider'));
        }, 50);
      }
    });
  }

  initSliders(sliders) {
    sliders.forEach(element => {
      lory(element, {
        infinite: 1,
        slidesToScroll: 1,
      });
    });
  }
}
