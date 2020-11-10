<template lang="pug">
  .detalhe-quadrinhos
    v-container
      v-row(justify="center")
        v-col(cols="12" sm="12" md="4")
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
                max-height="400"
              )
        v-col(cols="12" sm="12" md="6" lg="4")
          v-card.elevation-0(color="transparent")
            v-row(
              justify="center"
              align="center"
            )
              v-col(cols="12")
                h1.pt-1.subtitle-2 {{ quadrinho.title }}
              v-col(cols="12")
                h1 $ {{ quadrinho.prices[0] | ajustarPreco }}
              v-col(cols="12")
                h5 - Numero de Paginas: {{ quadrinho.pageCount }}
              v-col(cols="12")
                h3 - Descricao
                p.text-caption {{ quadrinho.description }}
              v-col(cols="12" sm="12" md="3" offset-md="6")
                v-text-field(
                  outlined
                  label="Qtde"
                  color="secondary"
                  v-model="quantidade"
                  type="number"
                )
              v-col(cols="12")
                v-btn(
                  block
                  color="info"
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
    quantidade: 1,
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
      const qtde = this.quantidade;
      const novoQuadrinho = Object.assign(quadrinho, { qtde });

      this.$store.dispatch('listar', novoQuadrinho);
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
