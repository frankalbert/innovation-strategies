<template>
  <div>
    <h5 class="link h5" @click="$router.push({ name: routeName })">Go back</h5>
  </div>
</template>

<script>
export default {
  name: "GoBackComponent",
  props: {
    routeName: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.link {
  color: $colorBlack;
  cursor: pointer;
}
</style>
