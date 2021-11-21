import { ElementUIComponent } from './component'

/** GridLayout Component */
export declare class EpGridLayout extends ElementUIComponent {
  autoSize: Boolean
  colNum: Number
  rowHeight: Number
  maxRows: Number
  margin: Number[]
  isDraggable: Boolean
  isResizable: Boolean
  isMirrored: Boolean
  useCssTransforms: Boolean
  verticalCompact: Boolean
  layout: any[]
  responsive: Boolean
  responsiveLayouts: any
  breakpoints: any
  cols: any
  preventCollision: Boolean
  useStyleCursor: Boolean

  layoutCreateEvent: () => void
  layoutBeforeMountEvent: () => void
  layoutMountedEvent: () => void
  layoutReadyEvent: () => void
  breakpointChangedEvent: () => void
}
