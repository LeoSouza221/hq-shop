<template lang="pug">
  v-main
    v-container
      ListagemQuadrinhos
</template>

<script>
import ListagemQuadrinhos from './listagemQuadrinhos/ListagemQuadrinhos.vue';

export default {
  name: 'Home',

  components: {
    ListagemQuadrinhos,
  },
};
</script>
