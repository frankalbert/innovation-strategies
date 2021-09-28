<template>
    <header class="header">
        <h2 class="title">{{ title }}</h2>
    </header>
</template>

<script>
export default {
    name: "HeaderComponent",
    props: {
        title: {
            type: String,
            default: "Title",
        },
    },
};
</script>

<style lang="scss" scoped>
.header {
    margin: 0 0 20px 0;
    .title {
        margin: 0;
        color: $colorBlack;
    }
}
</style>
