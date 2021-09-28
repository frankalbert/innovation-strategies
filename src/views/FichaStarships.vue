<template>
    <div class="row">
        <div class="col-12">
            <HeaderComponent :title="info.name" />
        </div>
        <div class="col-12">
            <h3 class="h4">Model: {{ info.model }} cm</h3>
            <h3 class="h4">Manufacturer: {{ info.manufacturer }}</h3>
            <h3 class="h4">Cost In Credits: {{ info.cost_in_credits }}</h3>
            <h3 class="h4">Cargo Capacity: {{ info.cargo_capacity }}</h3>
        </div>
        <div class="col-12">
            <GoBackComponent routeName="Starships" />
        </div>
    </div>
</template>

<script>
import Api from "@/Api.js";
import HeaderComponent from "../components/HeaderComponent.vue";
import GoBackComponent from "../components/GoBackComponent.vue";
import { mapState, mapMutations } from "vuex";
export default {
    name: "FichaStarships",
    data() {
        return {
            id: null,
            info: {},
        };
    },
    components: {
        HeaderComponent,
        GoBackComponent,
    },
    computed: {
        ...mapState(["urlApi"]),
    },
    methods: {
        ...mapMutations([
            "setShowLoading",
            "setInfoModalError",
            "setShowModalError",
        ]),
        async getListInfo() {
            try {
                this.setShowLoading(true);
                this.info = await Api.get(
                    `${this.urlApi}starships/${this.id}/`
                );
            } catch (error) {
                this.setInfoModalError({
                    title: "Ups Error",
                    body: error.message,
                });
                this.setShowModalError(true);
            } finally {
                this.setShowLoading(false);
            }
        },
    },
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
</script>

<style lang="scss" scoped></style>
