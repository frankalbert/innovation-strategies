<template>
  <div class="row">
    <div v-for="card in cards" :key="card.id" class="col-12 col-md-4">
      <CardComponent :card="card" />
    </div>
  </div>
</template>

<script>
import CardComponent from "./CardComponent.vue";
export default {
  name: "CardList",
  components: {
    CardComponent,
  },
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped></style>
