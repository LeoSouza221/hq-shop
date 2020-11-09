import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    itemsCarrinho: [],
  },

  mutations: {
    listaAdicionar(state, pedido) {
      state.itemsCarrinho.push(pedido);
    },

    listaRemover(state, pedido) {
      const posicao = state.itemsCarrinho.findIndex((item) => item.id === pedido.id);

      state.itemsCarrinho.splice(posicao, 1);
    },

    limparLista(state) {
      state.itemsCarrinho = [];
    },
  },

  actions: {
    listar: ({ commit }, quadrinho) => new Promise((resolve) => {
      commit('listaAdicionar', quadrinho);

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
