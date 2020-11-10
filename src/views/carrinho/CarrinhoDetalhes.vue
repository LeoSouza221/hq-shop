<template lang="pug">
  .carrinho-detalhes
    Alerta(
      :abrirAlerta.sync="abrirAlerta"
      :textoMensagem="textoMensagem"
    )
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
        h4.text-right {{ qtdeItensCarrinho }}
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
        h1.text-right $ {{ somaItemsCarrinho }}
    v-row(justify="center")
      v-btn(
        color="info"
        @click="finalizarCompra"
      ) Finalizar Compra
</template>

<script>
import Alerta from '@/components/Alerta.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'CarrinhoDetalhes',

  components: {
    Alerta,
  },

  props: {
    itensCarrinho: {
      type: Array,
      required: true,
    },
  },

  data: () => ({
    abrirAlerta: false,
    textoMensagem: '',
  }),

  computed: {
    ...mapGetters([
      'qtdeItensCarrinho',
      'somaItemsCarrinho',
    ]),
  },

  methods: {
    finalizarCompra() {
      this.textoMensagem = 'Compra realizada com sucesso';
      this.abrirAlerta = true;

      setTimeout(() => {
        this.$store.dispatch('limpar')
          .then(() => {
            this.$router.push('/');
          });
      }, 2000);
    },
  },
};
</script>

<style scoped>
  .borda-toolbar {
    border-bottom: 2px solid #fff !important;
  }
</style>
