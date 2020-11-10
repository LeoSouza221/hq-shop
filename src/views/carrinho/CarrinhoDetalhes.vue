<template lang="pug">
  .carrinho-detalhes
    v-toolbar(
      flat
      height="50"
      color="transparent"
      class="borda-toolbar"
    )
      v-icon.mr-3(color="white") mdi-book-open-outline
      v-toolbar-title Detalhes Pedidos
    v-row(justify="space-between")
      v-col(cols="6")
        h4 Qtde Items:
      v-col(cols="6")
        h4.text-right 6
      v-col(cols="6")
        h4 Aplicar Cupom:
      v-col(cols="6")
        v-text-field(
          dense
          outlined
          label="Cupom"
          color="secondary"
          type="number"
        )
      v-col(cols="12")
        v-divider
      v-col(cols="6")
        h1 Total
      v-col(cols="6")
        h1.text-right $ 10.00
    v-row(justify="center")
      v-btn(
        color="info"
        @click="finalizarCompra"
      ) Finalizar Compra
</template>

<script>
export default {
  name: 'CarrinhoDetalhes',

  props: {
    itensCarrinho: {
      type: Array,
      required: true,
    },
  },

  methods: {
    finalizarCompra() {
      this.$store.dispatch('listar')
        .then(() => {
          this.router.push('/');
        });
    },
  },
};
</script>

<style scoped>
  .borda-toolbar {
    border-bottom: 2px solid #fff !important;
  }
</style>
