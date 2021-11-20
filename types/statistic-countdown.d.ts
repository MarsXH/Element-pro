import { ElementUIComponent } from './component'
import { VNode } from 'vue';

export declare class DdStatisticCountdown extends ElementUIComponent {
  format: string;

  prefix: string | VNode;

  suffix: string | VNode;

  title: string | VNode;

  value: string | number;

  valueStyle: object;
}
