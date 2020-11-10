<template lang="pug">
  v-app-bar(
    absolute
    color="secondary"
  )
    v-toolbar-title.text-h5
      router-link.white--text(to="/") HQ Shop
    v-spacer
    v-badge(
      avatar
      overlap
      color="accent"
      :content="qtdeItensCarrinho"
      :value="qtdeItensCarrinho"
      dark
      offset-y="20"
    )
      v-btn(
        icon
        depressed
        :disabled="qtdeItensCarrinho <= 0"
        @click="abrirCarrinho"
      )
        v-icon mdi-cart
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppBar',

  computed: {
    ...mapGetters([
      'qtdeItensCarrinho',
    ]),
  },

  methods: {
    abrirCarrinho() {
      this.$router.push({ name: 'Carrinho' });
    },
  },
};
</script>
