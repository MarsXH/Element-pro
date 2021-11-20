import Vue from 'vue'
import { ElementUIComponent, ElementUIComponentSize, ElementUIHorizontalAlignment } from './component'

import { DdAside } from './aside'
import { DdDrawer } from './drawer'
import { DdForm } from './form'
import { DdFullScreen } from './full-screen'
import { DdInputNumber } from './input-number'
import { DdStatisticCountdown } from './statistic-countdown'
import { DdStatistic } from './statistic'
import { DdTable } from './table'
import { DdTimeline } from './timeline'
import { DdTimelineItem } from './timeline-item'
import { DdSelect } from './select'
import { DdGridLayout } from './grid-layout'
import { DdGridItem } from './grid-item'
import { DdButton } from './button'
import { DdFormItem } from './form-item'
import { DdSearchForm } from './search-form'
import { DdCrud } from './crud'

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

export class Aside extends DdAside {}
export class Drawer extends DdDrawer {}
export class Form extends DdForm {}
export class FullScreen extends DdFullScreen {}
export class InputNumber extends DdInputNumber {}
export class StatisticCountdown extends DdStatisticCountdown {}
export class Statistic extends DdStatistic {}
export class Table extends DdTable {}
export class Timeline extends DdTimeline {}
export class TimelineItem extends DdTimelineItem {}
export class Select extends DdSelect {}
export class GridLayout extends DdGridLayout {}
export class GridItem extends DdGridItem {}

/** Button Component */
export class Button extends DdButton {}

/** FormItem Component */
export class FormItem extends DdFormItem {}

/** SearchForm Component */
export class SearchForm extends DdSearchForm {}

/** Crud Component */
export class Crud extends DdCrud {}
