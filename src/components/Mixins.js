const watchMixin = {
  watch: {
    $route: {
      handler(newValue) {
        this.id = newValue.params.id;
        this.getListInfo();
      },
      immediate: true,
    },
  },
};

module.exports = {
  watchMixin,
};
