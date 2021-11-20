import GridLayout from './src/grid-layout';
import GridItem from './src/grid-item';

/* istanbul ignore next */
GridLayout.install = function(Vue) {
  Vue.component(GridLayout.name, GridLayout);
  Vue.component(GridItem.name, GridItem);
};

export default GridLayout;
