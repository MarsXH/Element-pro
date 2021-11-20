import Form from './src/form.vue';

/* istanbul ignore next */
Form.install = function(Vue) {
  Vue.component(Form.name, Form);
};

export default Form;