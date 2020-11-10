<template lang="pug">
  .carrinho-tabela
    v-card
      v-data-table(
        :headers="headers"
        :items="itensCarrinho"
        :items-per-page="itensCarrinho.length"
        hide-default-footer
      )
        template(v-slot:item.images="{ item }")
          v-img(
            :src="ajustarUrlImagem(item.images[0])"
            height="70"
            width="50"
            contain
          )
        template(v-slot:item.prices="{ item }")
          span $ {{ item.prices[0].price }}
        template(v-slot:item.id="{ item }")
          v-btn(icon color="warning" @click="removerItemCarrinho(item)")
            v-icon mdi-close
</template>

<script>
import ajusteUrl from '@/mixins/ajusteUrl';

export default {
  name: 'CarrinhoTabela',

  props: {
    itensCarrinho: {
      type: Array,
      required: true,
    },
  },

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
        text: 'Qtde',
        align: 'center',
        sortable: false,
        value: 'qtde',
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

  methods: {
    removerItemCarrinho(quadrinho) {
      this.$store.dispatch('remover', quadrinho);
    },
  },
};
</script>
