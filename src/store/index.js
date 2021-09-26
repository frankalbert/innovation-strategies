import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        showLoading: false,
        urlApi: 'https://swapi.dev/api/',
    },
    mutations: {
        setShowLoading(state, showLoading = false) {
            state.showLoading = showLoading;
        }
    },
    actions: {},
});
