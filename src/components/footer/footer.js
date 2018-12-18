import './scss/footer.scss';
import FooterTpl from './tpl/footer.hbs';

/**
 * @export
 * @class InstaSlider
 */
export default class Footer {
  /**
   * @param {*} options contains data to render component.
   */
  constructor(options) {
    let template = FooterTpl(options);

    this.footer = document.getElementById('Footer');

    this.footer.innerHTML = template;
  }
}
