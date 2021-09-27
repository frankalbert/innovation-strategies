<template>
    <div class="row">
        <div class="col-12 d-flex align-items-center">
            <HeaderComponent title="People" />
            <OrderComponent :order="order" @changeOrder="changeOrder" />
        </div>
        <div class="col-12">
            <InputComponent v-model="search" />
            <ItemListComponent
                :list="getPeopleBySearch"
                routeName="FichaPeople"
                :currentPage="currentPage"
                :maxPage="maxPage"
                @nextPage="nextPage"
                @prevPage="prevPage"
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
import OrderComponent from "../components/OrderComponent.vue";
import { mapState, mapMutations } from "vuex";
export default {
    name: "People",
    components: {
        HeaderComponent,
        InputComponent,
        ItemListComponent,
        GoBackComponent,
        OrderComponent,
    },
    data() {
        return {
            people: [],
            search: "",
            currentPage: 1,
            itemPerPage: 10,
            maxPage: 8,
            order: null,
        };
    },
    created() {
        this.getListInfo();
    },
    computed: {
        ...mapState(["urlApi"]),
        getPeopleBySearch() {
            return this.people
                .filter((item) => {
                    return item.name
                        .toLowerCase()
                        .includes(this.search.toLowerCase());
                })
                .sort((a, b) => {
                    const transformA = a.name.toUpperCase();
                    const transformB = b.name.toUpperCase();

                    let typeComparation = 0;
                    if (transformA > transformB) {
                        typeComparation = 1;
                    } else if (transformA < transformB) {
                        typeComparation = -1;
                    }
                    return this.order === 1
                        ? typeComparation
                        : this.order === 2
                        ? typeComparation * -1
                        : 0;
                });
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
                const people = await Api.get(
                    `${this.urlApi}people/?page=${this.currentPage}`
                );
                this.people = people.results || [];
                this.maxPage = Math.ceil(people.count / this.itemPerPage);
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
        nextPage() {
            this.currentPage++;
            this.getListInfo();
        },
        prevPage() {
            this.currentPage--;
            this.getListInfo();
        },
        changeOrder(value) {
            if (this.order !== value) {
                this.order = value;
            } else {
                this.order = null;
            }
        },
    },
};
</script>

<style lang="scss" scoped></style>
