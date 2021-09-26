<template>
    <router-link :to="{ name: card.urlName }" :title="card.name" class="card">
        <h4 class="card__title">{{ card.name }}</h4>
    </router-link>
</template>

<script>
export default {
    name: "CardComponent",
    props: {
        card: {
            type: Object,
            default: () => {},
        },
    },
};
</script>

<style lang="scss" scoped>
.card {
    display: block;
    text-decoration: none;
    margin-bottom: 16px;
    background-color: #fff;
    cursor: pointer;
    &:hover {
        background-color: #f7f7f7;
    }
    &__title {
        margin: 0;
        padding: 8px 16px 24px;
        font-size: 18px;
        color: #212121;
    }
}
</style>
