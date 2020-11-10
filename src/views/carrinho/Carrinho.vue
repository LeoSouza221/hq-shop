<template lang="pug">
  .carrinho-container
    v-container
      v-row(justify="center")
        v-col(cols="12" sm="8" md="8" xl="6")
          CarrinhoTabela(
            :itensCarrinho="itensCarrinho"
          )
        v-col(cols="12" sm="8" md="4" xl="6")
          CarrinhoDetalhes(
            :itensCarrinho="itensCarrinho"
          )
</template>

<script>
import CarrinhoDetalhes from './CarrinhoDetalhes.vue';
import CarrinhoTabela from './CarrinhoTabela.vue';

export default {
  name: 'Carrinho',

  components: {
    CarrinhoDetalhes,
    CarrinhoTabela,
  },

  computed: {
    itensCarrinho() {
      return this.$store.state.itemsCarrinho;
    },
  },
};
</script>

<style>
  .carrinho-container {
    margin-top: 100px;
    height: 100%;
  }
</style>
