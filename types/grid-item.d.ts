import { ElementUIComponent } from './component'

/** GridLayout Component */
export declare class EpGridItem extends ElementUIComponent {
  isDraggable: Boolean
  isResizable: Boolean
  static: Boolean
  minH: Number
  minW: Number
  maxH: Number
  maxW: Number
  x: Number
  y: Number
  w: Number
  h: Number
  i: any
  dragIgnoreFrom: String
  dragAllowFrom: String
  resizeIgnoreFrom: String
  preserveAspectRatio: Boolean

  moveEvent: () => void
  resizeEvent: () => void
  movedEvent: () => void
  resizedEvent: () => void
  containerResizedEvent: () => void
}
