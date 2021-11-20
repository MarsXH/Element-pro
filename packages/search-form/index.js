import SearchForm from './src/search-form';

/* istanbul ignore next */
SearchForm.install = function(Vue) {
  Vue.component(SearchForm.name, SearchForm);
};

export default SearchForm;
