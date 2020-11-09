<template lang="pug">
  .apresentar-quadrinhos
    v-toolbar(
      flat
      height="50"
      color="transparent"
      class="borda-toolbar"
    )
      v-icon.mr-3(color="white") mdi-book-open-outline
      v-toolbar-title Quadrinhos
    v-row(justify="center")
      v-pagination(
        v-model="paginaAtual"
        :length="totalPaginas"
        total-visible=5
        color="primary"
        @input="alterarPagina"
        light
      )
    v-slide-x-transition
      v-data-iterator(
        :items="quadrinhos"
        :items-per-page.sync="quadrinhos.length"
        hide-default-footer
        v-if="quadrinhos.length"
        :loading="false"
      )
        template(v-slot:default="props")
          v-container
            v-row
              v-col(
                v-for="(item, index) in props.items"
                :key="index"
                cols="12"
                sm="6"
                md="4"
                lg="3"
                xl="2"
              )
                LQCardInfos(
                  :quadrinho="item"
                )
</template>

<script>
import axios from '@/utils/axios';
import paramsSearch from '@/utils/paramsSearch';
import ListagemQuadrinhosCardInfos from './ListagemQuadrinhosCardInfos.vue';

export default {
  name: 'ListagemQuadrinhosApresentar',

  components: {
    LQCardInfos: ListagemQuadrinhosCardInfos,
  },

  data: () => ({
    paginaAtual: 1,
    totalPaginas: 1,
    authenticationParams: paramsSearch(),
    paginacao: {
      count: 0,
      limit: 20,
      offset: 0,
      total: 0,
    },
    quadrinhos: [],
  }),

  created() {
    this.buscarQuadrinhos(this.authenticationParams, this.paginacao);
  },

  methods: {
    buscarQuadrinhos(authenticationParams, paginacao) {
      const { limit, offset } = paginacao;
      const params = Object.assign(authenticationParams, { limit, offset });

      axios.get('/comics', { params })
        .then(({ data: { data: { results, ...novaPaginacao } } }) => {
          this.definirPaginacao(novaPaginacao);
          this.definirQuadrinhosRaros(results);
        });
    },

    definirQuadrinhosRaros(listaQuadrinhos) {
      this.quadrinhos = listaQuadrinhos.map((quadrinho) => {
        const raro = this.calcularRaridade();

        return Object.assign(quadrinho, { raro });
      });
    },

    calcularRaridade() {
      const numeroRandom = 1 + Math.floor((10 - 1) * Math.random());

      return numeroRandom === 1;
    },

    definirPaginacao(paginacao) {
      const { limit, offset, total } = paginacao;
      this.paginacao = paginacao;

      this.paginaAtual = (offset / limit) + 1;
      this.totalPaginas = Math.ceil(total / limit);
    },

    alterarPagina(pagina) {
      const { limit } = this.paginacao;
      const offset = (pagina - 1) * limit;

      this.paginacao.offset = offset;

      this.buscarQuadrinhos(this.authenticationParams, this.paginacao);
    },
  },
};
</script>

<style scoped>
  .apresentar-quadrinhos {
    margin-top: 100px;
  }

  .borda-toolbar {
    border-bottom: 2px solid #fff !important;
  }
</style>
