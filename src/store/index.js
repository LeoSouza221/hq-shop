import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    itemsCarrinho: [],
  },

  mutations: {
    listaAdicionar(state, quadrinho) {
      state.itemsCarrinho.push(quadrinho);
    },

    listaRemover(state, quadrinho) {
      const posicao = state.itemsCarrinho.findIndex((item) => item.id === quadrinho.id);

      state.itemsCarrinho.splice(posicao, 1);
    },

    limparLista(state) {
      state.itemsCarrinho = [];
    },
  },

  actions: {
    listar: ({ commit, state }, quadrinho) => new Promise((resolve) => {
      const posicao = state.itemsCarrinho.findIndex((item) => item.id === quadrinho.id);

      if (posicao === -1) {
        commit('listaAdicionar', quadrinho);
      }

      resolve();
    }),

    remover: ({ commit }, quadrinho) => new Promise((resolve) => {
      commit('listaRemover', quadrinho);

      resolve();
    }),
  },

  getters: {
    qtdeItensCarrinho: (state) => state.itemsCarrinho.length,
  },
});
