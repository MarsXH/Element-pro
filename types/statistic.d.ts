
import { ElementUIComponent } from './component'
import { VNode } from 'vue';
import { DdStatisticCountdown } from './statistic-countdown';

export declare class DdStatistic extends ElementUIComponent {
  static Countdown: typeof DdStatisticCountdown;

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
