<template lang="pug">
  .section(
    :class="classesTela"
    :style="{backgroundColor: $vuetify.theme.themes.dark.primary}"
  )
    v-form(ref="buscar" v-model="validaBusca")
      v-container
        v-row(
          justify="center"
        )
          v-col(cols="9" sm="6" md="6")
            v-text-field(
              outlined
              rounded
              clearable
              color="secondary"
              placeholder="Pesquisar"
              v-model="params.q"
            )
          v-col(cols="3" sm="2")
            v-btn(
              fab
              color="secondary"
              rounded
              @click="novaBusca"
            )
              v-icon(dark) mdi-magnify
</template>

<script>
import http from '@/utils/http';

export default {
  name: 'ListagemVideosBuscar',

  props: {
    videos: {
      type: Array,
      required: true,
    },
  },

  data: () => ({
    validaBusca: false,
    descricaoBusca: '',
    classesTela: 'buscar-container',
    params: {
      part: 'id,snippet',
      q: '',
      maxResults: '20',
      key: process.env.VUE_APP_API_KEY,
    },
  }),

  methods: {
    novaBusca() {
      this.videos.length = 0;
      this.classesTela = `${this.classesTela} animacao-subir`;

      this.buscarVideos(this.params);
    },

    buscarVideos(params) {
      // https://www.googleapis.com/youtube/v3/search?part=id,snippet&q={termo_de_busca}&key={API_KEY}
      http.get('/search', { params })
        .then(({ data: { items } }) => {
          console.log(items);
          this.videos.push(...items);
        });
    },
  },
};
</script>

<style scoped>
  .buscar-container {
    position: fixed;
    width: 100%;
    height: 100px;
    top: 50%;
    transform: translateY(-50%);
    transition: all .5s cubic-bezier(0.19, 1, 0.22, 1);
    z-index: 1;
  }

  .animacao-subir {
    animation: subindo 2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  }

  @keyframes subindo {
    100% {
      position: fixed !important;
      transform: none;
      top: 0;
      box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
        0px 2px 2px 0px rgba(0, 0, 0, 0.14),
        0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    }
  }
</style>
