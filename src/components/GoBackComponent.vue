<template>
    <div>
        <h5 class="link" @click="$router.push({ name: routeName })">Go back</h5>
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
    font-size: 18px;
    color: #212121;
    cursor: pointer;
}
</style>
