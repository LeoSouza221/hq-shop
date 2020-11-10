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
        h4 Cupom:
      v-col(cols="6" v-if="valorCupom === 0")
        v-btn(
          @click="gerarCupom"
          color="primary"
        ) Gerar Cupom
      v-col(cols="6" v-else)
       h4.text-right {{ valorCupom }}%
      v-col(cols="12")
        v-divider
      v-col.py-0(cols="12" v-if="valorCupom > 0")
        h6.text-caption.text-right.text-decoration-line-through $ {{ somaItemsCarrinho }}
      v-col(cols="6")
        h1 Total
      v-col(cols="6")
        h1.text-right $ {{ somaTotalComDescontos }}
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
    valorCupom: 0,
  }),

  computed: {
    ...mapGetters([
      'qtdeItensCarrinho',
      'somaItemsCarrinho',
    ]),

    somaTotalComDescontos() {
      return (this.somaItemsCarrinho - ((this.somaItemsCarrinho * this.valorCupom) / 100))
        .toFixed(2);
    },
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

    gerarCupom() {
      const numeroRandom = 1 + Math.floor((100 - 1) * Math.random());

      this.valorCupom = numeroRandom;
    },
  },
};
</script>

<style scoped>
  .borda-toolbar {
    border-bottom: 2px solid #fff !important;
  }
</style>
