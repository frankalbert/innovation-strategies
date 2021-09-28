<template>
  <div>
    <ul class="orders d-flex">
      <li
        @click="$emit('changeOrder', 1)"
        class="orders__item orders__item--desc"
        :class="{ active: order === 1 }"
        title="Order asc"
      >
        ❯
      </li>
      <li
        @click="$emit('changeOrder', 2)"
        class="orders__item orders__item--asc"
        :class="{ active: order === 2 }"
        title="Order desc"
      >
        ❯
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "OrderComponent",
  props: {
    order: {
      type: Number,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.orders {
  margin: 0;
  margin-left: 16px;
  padding: 0;
  list-style: none;
  &__item {
    margin: 8px;
    cursor: pointer;
    &.active {
      color: $colorRed;
    }
    &--asc {
      transform: rotate(270deg);
    }
    &--desc {
      transform: rotate(90deg);
    }
  }
}
</style>
