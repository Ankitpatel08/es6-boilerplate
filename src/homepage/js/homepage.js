import '../scss/homepage.scss';
import util from '../../common/js/custom';

import GlobalNav from '../../components/global-nav/global-nav';
import HPBackground from '../../components/hp-background/hp-background';
import InfoSection from '../../components/info-section/info-section';
import InfoBox from '../../components/info-box/info-box';

import data from './data';

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
  }
}

new Homepage();
