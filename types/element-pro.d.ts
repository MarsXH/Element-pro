import Vue from 'vue'
import { ElementUIComponent, ElementUIComponentSize, ElementUIHorizontalAlignment } from './component'

import { EpAside } from './aside'
import { EpDrawer } from './drawer'
import { EpForm } from './form'
import { EpFullScreen } from './full-screen'
import { EpInputNumber } from './input-number'
import { EpStatisticCountdown } from './statistic-countdown'
import { EpStatistic } from './statistic'
import { EpTable } from './table'
import { EpTimeline } from './timeline'
import { EpTimelineItem } from './timeline-item'
import { EpSelect } from './select'
import { EpGridLayout } from './grid-layout'
import { EpGridItem } from './grid-item'
import { EpButton } from './button'
import { EpFormItem } from './form-item'
import { EpSearchForm } from './search-form'
import { EpCrud } from './crud'

export interface InstallationOptions {
  locale: any,
  i18n: any,
  size: string
}

export const version: string

export function install (vue: typeof Vue, options: InstallationOptions): void

export type Component = ElementUIComponent

export type ComponentSize = ElementUIComponentSize

export type HorizontalAlignment = ElementUIHorizontalAlignment

export class Aside extends EpAside {}
export class Drawer extends EpDrawer {}
export class Form extends EpForm {}
export class FullScreen extends EpFullScreen {}
export class InputNumber extends EpInputNumber {}
export class StatisticCountdown extends EpStatisticCountdown {}
export class Statistic extends EpStatistic {}
export class Table extends EpTable {}
export class Timeline extends EpTimeline {}
export class TimelineItem extends EpTimelineItem {}
export class Select extends EpSelect {}
export class GridLayout extends EpGridLayout {}
export class GridItem extends EpGridItem {}

/** Button Component */
export class Button extends EpButton {}

/** FormItem Component */
export class FormItem extends EpFormItem {}

/** SearchForm Component */
export class SearchForm extends EpSearchForm {}

/** Crud Component */
export class Crud extends EpCrud {}
