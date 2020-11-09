<template lang="pug">
  v-card(
    color="accent"
    hover
    style="overflow: hidden"
    :class="[quadrinho.raro ? 'quadrinho-raro' : '']"
  )
    .box-raro(v-if="quadrinho.raro")
      h3 Raro
    v-card-text
      v-row(justify="center" align="stretch")
        v-col(cols="12")
          v-carousel(
            height="130"
            hide-delimiters
            :show-arrows="false"
            interval="2000"
            v-if="quadrinho.images.length"
          )
            v-carousel-item(
              v-for="(quadrinho, index) in quadrinho.images"
              :key="index"
            )
              v-img(
                :src="ajustarUrlImagem(quadrinho)"
                height="130"
                contain
              )
          div.container-imagem(v-else)
            h5.text-center Sem Imagems
            v-row(
              justify="center"
              align="center"
              style="height: 100%"
            )
              v-icon mdi-camera-off
        v-col(col="12")
          h2 R$ 50,00
          h4.pt-1.subtitle-2 {{ quadrinho.title | cortarTexto }}
</template>

<script>
export default {
  name: 'ListagemQuadrinhosCardInfos',

  props: {
    quadrinho: {
      type: Object,
      required: true,
    },
  },

  filters: {
    cortarTexto(string) {
      if (string.length > 30) {
        return `${string.slice(0, 30)}...`;
      }

      return string;
    },
  },

  methods: {
    ajustarUrlImagem({ path, extension }) {
      return `${path}.${extension}`;
    },
  },
};
</script>

<style scoped>
  .container-imagem {
    height: 130px;
  }

  .quadrinho-raro {
    box-shadow: 0 0 10px white,
      0 0 20px white,
      0 0 40px yellow,
      0 0 60px yellow !important;
  }

  .box-raro {
    height: 20px;
    width: 100px;
    position: absolute;
    top: 0;
    right: 0;
    transform: rotate(45deg);
    top: 20px;
    right: -25px;
    transform: rotate(45deg);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(165, 16, 16);
  }
</style>
