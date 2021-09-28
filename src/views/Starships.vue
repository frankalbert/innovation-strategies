<template>
  <div class="row">
    <div class="col-12 d-flex align-items-center mb-3">
      <HeaderComponent title="Starships" class="my-0" />
      <OrderComponent :order="order" @changeOrder="changeOrder" />
    </div>
    <div class="col-12">
      <InputComponent v-model="search" />
      <ItemListComponent
        :list="getStarshipsBySearch"
        routeName="FichaStarships"
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
import { filterAndOrderArrayByProps } from "@/helpers";
import HeaderComponent from "../components/HeaderComponent.vue";
import InputComponent from "../components/InputComponent.vue";
import ItemListComponent from "../components/ItemListComponent.vue";
import GoBackComponent from "../components/GoBackComponent.vue";
import OrderComponent from "../components/OrderComponent.vue";
import { mapState, mapMutations } from "vuex";
export default {
  name: "Starships",
  components: {
    HeaderComponent,
    InputComponent,
    ItemListComponent,
    GoBackComponent,
    OrderComponent,
  },
  data() {
    return {
      starships: [],
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
    getStarshipsBySearch() {
      return filterAndOrderArrayByProps({
        arrayToSearch: this.starships,
        search: this.search,
        searchByProp: "name",
        order: this.order,
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
        const starships = await Api.get(
          `${this.urlApi}starships/?page=${this.currentPage}`
        );
        this.starships = starships.results || [];
        this.maxPage = Math.ceil(starships.count / this.itemPerPage);
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
