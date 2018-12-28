import '../scss/gallery.scss';
import util from '../../common/js/custom';
import data from './data';

import GlobalNav from '../../components/global-nav/global-nav';
import GallerySlider from '../../components/gallery-slider/gallery-slider';

/**
 *
 * @class Gallery
 */
class Gallery {
  constructor() {
    data.getGalleryData('', this.init.bind(this), response => {
      util.alertErrorCallback(response);
    });
  }

  init(data) {
    data = JSON.parse(data);

    new GlobalNav();
    new GallerySlider(data.galleryData);
  }
}

new Gallery();
