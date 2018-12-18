import '../scss/homepage.scss';
import util from '../../common/js/custom';
import data from './data';

import GlobalNav from '../../components/global-nav/global-nav';
import HPBackground from '../../components/hp-background/hp-background';
import InfoSection from '../../components/info-section/info-section';
import InfoBox from '../../components/info-box/info-box';
import VideoSection from '../../components/video-section/video-section';
import InstaSlider from '../../components/insta-slider/insta-slider';
import ExternalLinks from '../../components/external-links/external-links';
import Masthead from '../../components/masthead/masthead';
import Footer from '../../components/footer/footer';

/**
 *
 * @class Homepage
 */
class Homepage {
  constructor() {
    data.getHomepageData('', this.init.bind(this), response => {
      util.alertErrorCallback(response);
    });
  }

  init(data) {
    data = JSON.parse(data);

    new GlobalNav();
    new HPBackground(data.hpBackground);
    new InfoSection(data.infoSection);
    new InfoBox(data.InfoBox1);
    new InfoBox(data.InfoBox2);
    new VideoSection(data.videoSection);
    new InstaSlider();
    new ExternalLinks(data.externalLinks);
    new Masthead(data.masthead);
    new Footer(data.footer);
  }
}

new Homepage();
