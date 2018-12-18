import './scss/info-box.scss';
import infoBoxTpl from './tpl/info-box.hbs';

/**
 * @export
 * @class InfoBox
 */
export default class InfoBox {
  /**
   * @param {*} options contains data to render component.
   */
  constructor(options) {
    let template = infoBoxTpl(options);

    this.infoBox = document.getElementById(options.id);

    this.infoBox.innerHTML = template;
  }
}
