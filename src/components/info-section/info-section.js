import './scss/info-section.scss';
import infoSectionTpl from './tpl/info-Section.hbs';

/**
 * APP: All
 * renders info Section
 * @export
 * @class InfoSection
 */
export default class InfoSection {
  /**
   * @param {*} options contains data to render component.
   */
  constructor(options) {
    let template = infoSectionTpl(options);

    this.infoSection = document.getElementById('InfoSection');

    this.infoSection.innerHTML = template;
  }
}
