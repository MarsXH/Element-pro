export const pageRouterMap = [
  {
    path: 'aside',
    name: 'EpAside',
    component: () => import('../views/Aside.vue'),
    meta: { title: 'Aside 侧边栏容器' }
  },
  {
    path: 'drawer',
    name: 'EpDrawer',
    component: () => import('../views/Drawer.vue'),
    meta: { title: 'Drawer 抽屉'}
  },
  {
    path: 'table',
    name: 'EpTable',
    component: () => import('../views/Table.vue'),
    meta: { title: 'Table 表格'}
  },
  {
    path: 'input-number',
    name: 'EpInputNumber',
    component: () => import('../views/InputNumber.vue'),
    meta: { title: 'InputNumber 计数器'}
  },
  {
    path: 'full-screen',
    name: 'EpFullScreen',
    component: () => import('../views/FullScreen.vue'),
    meta: { title: 'FullScreen 全屏展示'}
  },
  {
    path: 'select',
    name: 'EpSelect',
    component: () => import('../views/Select.vue'),
    meta: { title: 'Select 选择器'}
  },
  {
    path: 'statistic',
    name: 'EpStatistic',
    component: () => import('../views/Statistic.vue'),
    meta: { title: 'Statistic 数据统计'}
  },
  {
    path: 'timeline',
    name: 'EpTimeline',
    component: () => import('../views/Timeline.vue'),
    meta: { title: 'Timeline 时间轴'}
  },
  {
    path: 'grid-layout',
    name: 'EpGridLayout',
    component: () => import('../views/GridLayout.vue'),
    meta: { title: 'GridLayout 网格布局'}
  },
  {
    path: 'form-item',
    name: 'EpFormItem',
    component: () => import('../views/FormItem.vue'),
    meta: { title: 'FormItem 表单项'}
  },
  {
    path: 'search-form',
    name: 'EpSearchForm',
    component: () => import('../views/SearchForm.vue'),
    meta: { title: 'SearchForm 搜索'}
  },
  {
    path: 'crud',
    name: 'EpCrud',
    component: () => import('../views/Crud.vue'),
    meta: { title: 'Crud 增删改查'}
  },
]
