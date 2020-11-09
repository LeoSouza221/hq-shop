<template lang="pug">
  .detalhe-quadrinhos
    v-container
      v-row(justify="center")
        v-col(cols="12" sm="12" md="6")
          v-carousel(
            cycle
            :show-arrows="false"
            hide-delimiter-background
            delimiter-icon="mdi-minus"
            interval="2000"
          )
            v-carousel-item(
              v-for="(quadrinho, index) in quadrinho.images"
              :key="index"
            )
              v-img(
                :src="ajustarUrlImagem(quadrinho)"
                contain
                aspect-ratio="1.0"
              )
        v-col(cols="12" sm="12" md="6")
          v-row(
            justify="center"
            align="center"
          )
            v-col(cols="12")
              h1.pt-1.subtitle-2 {{ quadrinho.title }}
            v-col(cols="12")
              h1 $ {{ quadrinho.prices[0] | ajustarPreco }}
            v-col(cols="12")
              p.text-caption {{ quadrinho.description }}
            v-col(cols="12")
              v-btn(
                block
                color="secondary"
                @click="adicionarAoCarrinho(quadrinho)"
              ) Comprar
</template>

<script>
import axios from '@/utils/axios';
import paramsSearch from '@/utils/paramsSearch';
import ajusteUrl from '@/mixins/ajusteUrl';

export default {
  name: 'DetalhesQuadrinhos',

  mixins: [ajusteUrl],

  data: () => ({
    quadrinho: {},
    params: paramsSearch(),
  }),

  created() {
    const quadrinhoId = this.$route.params.id;

    this.buscarQuadrinhoPorId(quadrinhoId, this.params);
  },

  filters: {
    ajustarPreco(valor) {
      return typeof valor !== 'undefined' ? valor.price.toFixed(2) : 0.00;
    },
  },

  methods: {
    buscarQuadrinhoPorId(id, params) {
      axios.get(`/comics/${id}`, { params })
        .then(({ data: { data: { results } } }) => {
          [this.quadrinho] = results;
        });
    },

    adicionarAoCarrinho(quadrinho) {
      this.$store.dispatch('listar', quadrinho);
    },
  },
};
</script>

<style>
  .detalhe-quadrinhos {
    margin-top: 100px;
    height: 100%;
    display: flex;
    align-items: center;
  }
</style>
