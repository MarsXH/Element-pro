import Crud from './src/crud';

/* istanbul ignore next */
Crud.install = function(Vue) {
  Vue.component(Crud.name, Crud);
};

export default Crud;
