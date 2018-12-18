import './scss/external-links.scss';
import ExternalLinksTpl from './tpl/external-links.hbs';

/**
 * @export
 * @class ExternalLinks
 */
export default class ExternalLinks {
  /**
   * @param {*} options contains data to render component.
   */
  constructor(options) {
    let template = ExternalLinksTpl(options);

    this.externalLinks = document.getElementById('ExternalLinks');

    this.externalLinks.innerHTML = template;
  }
}
