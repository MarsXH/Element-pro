import { ElementUIComponent } from './component'
import { VNode } from 'vue'

type hide = (shouldCancel: boolean) => void
declare enum Direction {
    LTR = 'ltr', // left to right
    RTL = 'rtl', // right to left
    TTB = 'ttb', // top to bottom
    BTT = 'btt' // bottom to top
}

interface DrawerSlots {
    default: VNode[];

    title: VNode[];

    [key: string]: VNode[]
}
/** Drawer Component */
export declare class EpDrawer extends ElementUIComponent {
    appendToBody: boolean

    beforeClose: (done: hide) => void

    closeOnPressEscape: boolean

    customClass: string

    destroyOnClose: boolean

    modal: boolean

    modalAppendToBody: boolean

    position: string

    showClose: boolean

    drag: boolean

    size: number | string

    maxSize: number | string

    minSize: number | string

    title: string

    visible: boolean

    wrapperClosable: boolean

    $slots: DrawerSlots
}
