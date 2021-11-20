import Timeline from './src/timeline.vue';
import TimelineItem from './src/timeline-item.vue';

/* istanbul ignore next */
Timeline.install = function(Vue) {
  Vue.component(Timeline.name, Timeline);
  Vue.component(TimelineItem.name, TimelineItem);
};

export default Timeline;