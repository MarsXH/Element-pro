import Statistic from './src/statistic';
import Countdown from './src/countdown';

Statistic.Countdown = Countdown;
/* istanbul ignore next */
Statistic.install = function(Vue) {
  Vue.component(Statistic.name, Statistic);
  Vue.component(Statistic.Countdown.name, Statistic.Countdown);
};

export default Statistic;
