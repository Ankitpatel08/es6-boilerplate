import '../scss/homepage.scss';
import util from '../../common/js/custom';

import GlobalNav from '../../components/global-nav/global-nav';
import HPBackground from '../../components/hp-background/hp-background';

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
  }
}

new Homepage();
