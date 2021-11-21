
import { ElementUIComponent } from './component'
import { VNode } from 'vue';
import { EpStatisticCountdown } from './statistic-countdown';

export declare class EpStatistic extends ElementUIComponent {
  static Countdown: typeof EpStatisticCountdown;

  decimalSeparator: string;

  formatter: () => VNode;

  groupSeparator: string;

  precision: number;

  prefix: string | VNode;

  suffix: string | VNode;

  title: string | VNode;

  value: string | number;
  
  valueStyle: object;

}
