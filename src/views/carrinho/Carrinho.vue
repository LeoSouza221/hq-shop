<template lang="pug">
  .carrinho-container
    v-row(justify="center")
      v-data-table(
        :headers="headers"
        :items="itensCarrinho"
        :items-per-page="5"
      )
        template(v-slot:item.images="{ item }")
          v-img(
            :src="ajustarUrlImagem(item.images[0])"
            height="70"
            width="50"
            contain
          )
        template(v-slot:item.prices="{ item }")
          span {{ prices }}
</template>

<script>
import ajusteUrl from '@/mixins/ajusteUrl';

export default {
  name: 'Carrinho',

  mixins: [ajusteUrl],

  data: () => ({
    headers: [
      {
        text: 'Imagem',
        align: 'center',
        sortable: false,
        value: 'images',
        width: '50px',
      },
      {
        text: 'Nome',
        align: 'left',
        sortable: false,
        value: 'title',
        width: '500px',
      },
      {
        text: 'Preço',
        align: 'center',
        sortable: false,
        value: 'prices',
      },
      {
        text: 'Remover',
        align: 'center',
        sortable: false,
        value: 'id',
      },
    ],
  }),

  computed: {
    itensCarrinho() {
      return this.$store.state.itemsCarrinho;
    },
  },
};
</script>

<style>
  .carrinho-container {
    margin-top: 100px;
    height: 100%;
    display: flex;
    align-items: center;
  }
</style>
