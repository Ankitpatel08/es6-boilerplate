import './scss/insta-slider.scss';
import InstaSliderTpl from './tpl/insta-slider.hbs';

/**
 * @export
 * @class InstaSlider
 */
export default class InstaSlider {
  /**
   * @param {*} options contains data to render component.
   */
  constructor() {
    let template = InstaSliderTpl();

    this.instaSlider = document.getElementById('InstaSlider');

    this.instaSlider.innerHTML = template;
  }
}
