<template>
    <div class="row">
        <div class="col-12">
            <HeaderComponent title="People" />
        </div>
        <div class="col-12">
            <InputComponent v-model="search" />
            <ItemListComponent
                :list="getPeopleBySearch"
                routeName="FichaPeople"
            />
        </div>
        <div class="col-12">
            <GoBackComponent routeName="Home" />
        </div>
    </div>
</template>

<script>
import Api from "@/Api.js";
import HeaderComponent from "../components/HeaderComponent.vue";
import InputComponent from "../components/InputComponent.vue";
import ItemListComponent from "../components/ItemListComponent.vue";
import GoBackComponent from "../components/GoBackComponent.vue";
import { mapState, mapMutations } from "vuex";
export default {
    name: "People",
    components: {
        HeaderComponent,
        InputComponent,
        ItemListComponent,
        GoBackComponent,
    },
    data() {
        return {
            people: [],
            search: "",
        };
    },
    created() {
        this.getListInfo();
    },
    computed: {
        ...mapState(["urlApi"]),
        getPeopleBySearch() {
            return this.people.filter((item) =>
                item.name.toLowerCase().includes(this.search.toLowerCase())
            );
        },
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
                const people = await Api.get(`${this.urlApi}people/`);
                this.people = people.results;
                this.setShowLoading(false);
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
};
</script>

<style lang="scss" scoped></style>
