<template>
    <div class="row">
        <div class="col-12">
            <HeaderComponent title="Title" />
        </div>
        <div class="col-12">
            <CardListComponent :cards="cards" />
        </div>
    </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import CardListComponent from "../components/CardListComponent.vue";
export default {
    name: "Home",
    components: {
        HeaderComponent,
        CardListComponent,
    },
    data() {
        return {
            cards: [
                { id: 1, name: "People", urlName: "People" },
                { id: 2, name: "Starships", urlName: "Starships" },
                { id: 3, name: "Planets", urlName: "Planets" },
            ],
        };
    },
};
</script>

<style lang="scss" scoped></style>
