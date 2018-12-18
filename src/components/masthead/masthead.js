import './scss/masthead.scss';
import MastheadTpl from './tpl/masthead.hbs';

/**
 * @export
 * @class Masthead
 */
export default class Masthead {
  /**
   * @param {*} options contains data to render component.
   */
  constructor(options) {
    let template = MastheadTpl(options);

    this.masthead = document.getElementById('Masthead');

    this.masthead.innerHTML = template;
  }
}
