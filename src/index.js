import InputNumber from '../packages/input-number';
import Statistic from '../packages/statistic';
import Table from '../packages/table';
import Form from '../packages/form';
import Aside from '../packages/aside';
import Drawer from '../packages/drawer';
import FullScreen from '../packages/full-screen';
import Timeline from '../packages/timeline';
import Select from '../packages/select';
import GridLayout from '../packages/grid-layout';
import FormItem from '../packages/form-item';
import SearchForm from '../packages/search-form';
import Crud from '../packages/crud';

const components = [
	InputNumber,
  Statistic,
	Table,
  Form,
	Aside,
	Drawer,
  FullScreen,
  Timeline,
  Select,
  GridLayout,
  FormItem,
  SearchForm,
  Crud
];

const install = function(Vue) {
  components.forEach(component => {
    component.install(Vue)
    // Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.0.0',
  install,
  InputNumber,
  Statistic,
	Table,
  Form,
	Aside,
	Drawer,
  Timeline,
  FullScreen,
  Select,
  GridLayout,
  FormItem,
  SearchForm,
  Crud
};
