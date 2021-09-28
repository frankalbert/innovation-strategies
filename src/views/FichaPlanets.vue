<template>
    <div class="row">
        <div class="col-12">
            <HeaderComponent :title="info.name" />
        </div>
        <div class="col-12">
            <h3 class="h4">Rotation Period: {{ info.rotation_period }}</h3>
            <h3 class="h4">Orbital Period: {{ info.orbital_period }}</h3>
            <h3 class="h4">Gravity: {{ info.gravity }}</h3>
            <h3 class="h4">Population: {{ info.population }}</h3>
        </div>
        <div class="col-12">
            <GoBackComponent routeName="Planets" />
        </div>
    </div>
</template>

<script>
import Api from "@/Api.js";
import { watchMixin } from "../components/Mixins.js";
import HeaderComponent from "../components/HeaderComponent.vue";
import GoBackComponent from "../components/GoBackComponent.vue";
import { mapState, mapMutations } from "vuex";
export default {
    name: "FichaPlanets",
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
                this.info = await Api.get(`${this.urlApi}planets/${this.id}/`);
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
    mixins: [watchMixin],
};
</script>

<style lang="scss" scoped></style>
