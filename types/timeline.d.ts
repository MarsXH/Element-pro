
import { ElementUIComponent } from './component'
import { DdTimelineItem } from './timeline-item';

export declare class DdTimeline extends ElementUIComponent {
  static Item: typeof DdTimelineItem;

  pending: any;

  pendingDot: any;

  reverse: boolean;

  mode: 'left' | 'alternate' | 'right' | '';
}
