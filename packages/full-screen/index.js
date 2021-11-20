import FullScreen from './src/full-screen.vue';

/* istanbul ignore next */
FullScreen.install = function(Vue) {
  Vue.component(FullScreen.name, FullScreen);
};

export default FullScreen;