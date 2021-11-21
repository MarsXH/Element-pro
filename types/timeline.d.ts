
import { ElementUIComponent } from './component'
import { EpTimelineItem } from './timeline-item';

export declare class EpTimeline extends ElementUIComponent {
  static Item: typeof EpTimelineItem;

  pending: any;

  pendingDot: any;

  reverse: boolean;

  mode: 'left' | 'alternate' | 'right' | '';
}
