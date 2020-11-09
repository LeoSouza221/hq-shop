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
      // const { acao, pedido } = info;
      // const atualizarLista = {
      //   adicionar: (itemPedido) => {
      //     commit('listaAdicionar', itemPedido);
      //   },
      //   remover: (itemPedido) => {
      //     commit('listaRemover', itemPedido);
      //   },
      // };
      commit('listaAdicionar', quadrinho);

      resolve();
    }),
  },
  getters: {
  },
});
