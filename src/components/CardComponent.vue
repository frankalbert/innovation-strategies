<template>
    <router-link :to="{ name: card.urlName }" :title="card.name" class="card">
        <h4 class="card__title h5">{{ card.name }}</h4>
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
    background-color: $colorWhite;
    cursor: pointer;
    &:hover {
        background-color: $colorGrey2;
    }
    &__title {
        margin: 0;
        padding: 8px 16px 24px;
        color: $colorBlack;
    }
}
</style>
