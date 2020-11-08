<template lang="pug">
  div
    ListagemVideosBuscar(
      :videos="videos"
    )
    ListagemVideosApresentar(
      :videos="videos"
    )
</template>

<script>
import ListagemVideosApresentar from './ListagemVideosApresentar.vue';
import ListagemVideosBuscar from './ListagemVideosBuscar.vue';

export default {
  name: 'ListagemVideos',

  components: {
    ListagemVideosApresentar,
    ListagemVideosBuscar,
  },

  data: () => ({
    videos: [],
  }),
};
</script>
