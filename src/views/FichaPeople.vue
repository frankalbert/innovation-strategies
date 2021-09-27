<template>
    <div class="row">
        <div class="col-12">
            <HeaderComponent :title="people.name" />
        </div>
        <div class="col-12">
            <h3>Height: {{ people.height }} cm</h3>
            <h3>Mass: {{ people.mass }}</h3>
            <h3>Hair Color: {{ people.hair_color }}</h3>
            <h3>Eye Color: {{ people.eye_color }}</h3>
        </div>
        <div class="col-12">
            <GoBackComponent routeName="People" />
        </div>
    </div>
</template>

<script>
import Api from "@/Api.js";
import HeaderComponent from "../components/HeaderComponent.vue";
import GoBackComponent from "../components/GoBackComponent.vue";
import { mapState, mapMutations } from "vuex";
export default {
    name: "FichaPeople",
    data() {
        return {
            id: null,
            people: {},
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
        ...mapMutations(["setShowLoading"]),
        async getListInfo() {
            try {
                this.setShowLoading(true);
                this.people = await Api.get(`${this.urlApi}people/${this.id}/`);
                this.setShowLoading(false);
            } catch (error) {
                console.error(error);
            }
        },
    },
    watch: {
        $route: {
            handler(newValue) {
                console.log(newValue.params.id);
                this.id = newValue.params.id;
                this.getListInfo();
            },
            immediate: true,
        },
    },
};
</script>

<style lang="scss" scoped></style>
