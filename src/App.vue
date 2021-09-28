<template>
    <div class="container">
        <LoadingComponent v-if="showLoading" />
        <ModalErrorComponent v-if="showModalError" />
        <router-view> </router-view>
    </div>
</template>

<script>
import LoadingComponent from "./components/LoadingComponent.vue";
import ModalErrorComponent from "./components/ModalErrorComponent.vue";
import { mapState } from "vuex";

export default {
    name: "App",
    components: {
        LoadingComponent,
        ModalErrorComponent,
    },
    computed: {
        ...mapState(["showLoading", "showModalError"]),
    },
};
</script>

<style lang="scss" scoped>
.container {
    margin: 30px 0 20px;
}
</style>
