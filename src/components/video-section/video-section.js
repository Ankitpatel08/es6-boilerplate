import './scss/video-section.scss';
import VideoSectionTpl from './tpl/video-section.hbs';

/**

 * @export
 * @class VideoSection
 */
export default class VideoSection {
  /**
   * @param {*} options contains data to render component.
   */
  constructor() {
    let template = VideoSectionTpl();

    this.videoSection = document.getElementById('VideoSection');

    this.videoSection.innerHTML = template;
  }
}
