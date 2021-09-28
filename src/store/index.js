import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showLoading: false,
    urlApi: "https://swapi.dev/api/",
    showModalError: false,
    infoModalError: {
      title: "Error en la operación",
      body: "asdad asdadasd",
    },
  },
  mutations: {
    setShowLoading(state, showLoading = false) {
      state.showLoading = showLoading;
    },
    setShowModalError(state, showModalError = false) {
      state.showModalError = showModalError;
    },
    setInfoModalError(state, { title = "", body = "" }) {
      state.infoModalError = {
        title,
        body,
      };
    },
  },
  actions: {},
});
