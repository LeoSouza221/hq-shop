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

    limparItemsCarribgo(state) {
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

    limpar: ({ commit }) => new Promise((resolve) => {
      commit('limparItemsCarribgo');

      resolve();
    }),
  },

  getters: {
    qtdeItensCarrinho: (state) => state.itemsCarrinho
      .reduce((acumulado, item) => acumulado + parseInt(item.qtde, 10), 0),

    somaItemsCarrinho: (state) => state.itemsCarrinho.reduce((acumulado, item) => {
      const [preco] = item.prices;

      return acumulado + (preco.price * item.qtde);
    }, 0).toFixed(2),

    tamanhoCarrinho: (state) => state.itemsCarrinho.length,
  },
});
