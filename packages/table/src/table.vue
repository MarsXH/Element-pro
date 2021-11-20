<script>
import ElTable from "element-ui/lib/table";

const methods = {};
Object.keys(ElTable.methods).forEach((item) => {
  methods[item] = function(...args) {
    this.$refs.ddtable[item](...args);
  };
});

export default {
  name: "DdTable",
  props: Object.assign({}, ElTable.props, {
    columns: {
      type: Array,
      default: [],
    },
    pagination: {
      type: Object,
      default: () => null,
    },
    scrollToTop: {
      type: Boolean,
      default: false,
    },
  }),
  data() {
    return {
      localPagination: Object.assign({}, this.pagination),
      columnUpdate: true,
    };
  },
  watch: {
    data: function() {
      if (this.scrollToTop) {
        this.$refs.ddtable.bodyWrapper.scrollTop = 0;
      }
    },
    columns: {
      handler: function() {
        this.columnUpdate = false;
        this.$nextTick(() => {
          this.columnUpdate = true;
        });
      },
      deep: true,
    },
  },
  mounted() {
    this.nativeTable = this.$refs.ddtable;
  },
  methods: Object.assign({}, methods, {
    renderColume(columns) {
      return columns.map((item) => {
        const props = item;
        let scopedSlots = {};
        if (item.customRender && item.customRender instanceof Function) {
          scopedSlots.default = (scope) =>
            item.customRender(scope.row[item.prop], scope.row, scope.$index);
        }
        if (
          item.scopedSlots &&
          item.scopedSlots.customRender &&
          this.$scopedSlots[item.scopedSlots.customRender]
        ) {
          scopedSlots.default = (scope) =>
            this.$scopedSlots[item.scopedSlots.customRender](scope);
        }
        if (item.headerRender && this.$scopedSlots[item.headerRender]) {
          scopedSlots.header = (scope) =>
            this.$scopedSlots[item.headerRender](scope);
        }
        return (
          <el-table-column {...{ props, scopedSlots }}>
            {item.children && item.children.length > 0
              ? this.renderColume(item.children)
              : ""}
          </el-table-column>
        );
      });
    },
    renderPagination(h) {
      if (!this.pagination) return;
      this.localPagination.pageSize = this.localPagination.pageSizes[0];
      const vm = this;
      return h("el-pagination", {
        style: {
          margin: "10px 0",
        },
        attrs: {
          ...vm.localPagination,
        },
        props: {
          ...vm.localPagination,
        },
        on: {
          "size-change": (val) => {
            vm.localPagination.currentPage = 1;
            vm.localPagination.pageSize = val;
            if (vm.localPagination.sizeChange)
              vm.localPagination.sizeChange(val);
            if (vm.localPagination.change)
              vm.localPagination.change(
                vm.localPagination.currentPage,
                vm.localPagination.pageSize
              );
          },
          "current-change": (val) => {
            vm.localPagination.currentPage = val;
            if (vm.localPagination.currentChange)
              vm.localPagination.currentChange(val);
            if (vm.localPagination.change)
              vm.localPagination.change(
                vm.localPagination.currentPage,
                vm.localPagination.pageSize
              );
          },
          "prev-change": (val) => {
            vm.localPagination.currentPage = val;
            if (vm.localPagination.prevChange)
              vm.localPagination.prevChange(val);
            if (vm.localPagination.change)
              vm.localPagination.change(
                vm.localPagination.currentPage,
                vm.localPagination.pageSize
              );
          },
          "next-change": (val) => {
            vm.localPagination.currentPage = val;
            if (vm.localPagination.nextChange)
              vm.localPagination.nextChange(val);
            if (vm.localPagination.change)
              vm.localPagination.change(
                vm.localPagination.currentPage,
                vm.localPagination.pageSize
              );
          },
        },
      });
    },
  }),
  render(h) {
    const props = {};
    Object.keys(ElTable.props).forEach((k) => {
      this[k] !== undefined && (props[k] = this[k]);
      return props[k];
    });
    const table = (
      <el-table
        ref="ddtable"
        {...{ props, scopedSlots: { ...this.$scopedSlots } }}
        on={this.$listeners}
      >
        {this.columnUpdate ? this.renderColume(this.columns) : null}
        {Object.keys(this.$slots).map((name) => (
          <template slot={name}>{this.$slots[name]}</template>
        ))}
      </el-table>
    );

    // const pagination = (
    //   <el-pagination
    //     style="margin: 10px 0"
    //     {...{ props: this.localPagination}}
    //     onsizeChange={pageSize => this.pagination.sizeChange(pageSize)}
    //     oncurrentChange={current => this.pagination.currentChange(current)}
    //     onprevClick={current => this.pagination.prevClick(current)}
    //     onnextChange={current => this.pagination.nextChange(current)}>
    //   </el-pagination>
    // )

    if (this.pagination) {
      if (this.pagination.position === "both") {
        return (
          <div class="dd-table">
            {this.renderPagination(h)}
            <div class="dd-table__wrapper">{table}</div>
            {this.renderPagination(h)}
          </div>
        );
      } else if (this.pagination.position === "top") {
        return (
          <div class="dd-table">
            {this.renderPagination(h)}
            <div class="dd-table__wrapper">{table}</div>
          </div>
        );
      } else {
        return (
          <div class="dd-table">
            <div class="dd-table__wrapper">{table}</div>
            {this.renderPagination(h)}
          </div>
        );
      }
    } else {
      return (
        <el-table
          ref="ddtable"
          {...{ props, scopedSlots: { ...this.$scopedSlots } }}
          on={this.$listeners}
        >
          {this.columnUpdate ? this.renderColume(this.columns) : null}
          {Object.keys(this.$slots).map((name) => (
            <template slot={name}>{this.$slots[name]}</template>
          ))}
        </el-table>
      );
    }
  },
};
</script>
